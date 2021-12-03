let {
    addItem,
    getItemInCart,
    initialiseCart,
    removeItem,
    getBill,
} = require('./shoppingCart');

//arrange
beforeEach(() => {
    initialiseCart();
});

//test case 1
//to add one item - banana in the cart.
test('Add one item in the cart', () => {
    let bananaBarcode = "01001";
    addItem(bananaBarcode) //action
    let cartBarcode = getItemInCart(bananaBarcode); //action
    expect((cartBarcode)).toBe(1); //assert
})

//test case 2
//to add one item - apple in the cart.
test('Add one item in the cart', () => {
    let appleBarcode = "01002";
    addItem(appleBarcode) //action
    let cartBarcode = getItemInCart(appleBarcode); //action
    expect((cartBarcode)).toBe(1); //assert
})

//test case 3
//to add one item - carrot in the cart.
test('Add one item in the cart', () => {
    let carrotBarcode = "01003";
    addItem(carrotBarcode) //action
    let cartBarcode = getItemInCart(carrotBarcode); //action
    expect((cartBarcode)).toBe(1); //assert
})

//test case 4
//to add multiple items (same item twice) in the cart.
test('Check if multiple items can be added', () => {
    let bananaBarcode = "01001";
    let expectedValue = 2;
    addItem(bananaBarcode)
    addItem(bananaBarcode)
    let cartBarcode = getItemInCart(bananaBarcode);
    expect(cartBarcode).toBe(expectedValue);
    console.log(cartBarcode);
})

//test case 5
//to add two different items in the cart.
test('Check if multiple items can be added', () => {
    let bananaBarcode = "01001";
    let appleBarcode = "01002";
    addItem(bananaBarcode)
    addItem(appleBarcode)
    let cartBarcode = getItemInCart(bananaBarcode);
    expect(cartBarcode).toBe(1);
    let appleBarcodeInCart = getItemInCart(appleBarcode);
    expect(appleBarcodeInCart).toBe(1);
})

//test case 6
//to add carrot, apple and banana in the cart.
test('Check if multiple items can be added', () => {
    let bananaBarcode = "01001";
    let appleBarcode = "01002";
    let carrotBarcode = "01003";
    addItem(bananaBarcode)
    addItem(appleBarcode)
    addItem(carrotBarcode)
    let cartBarcode = getItemInCart(bananaBarcode);
    expect(cartBarcode).toBe(1);
    let appleBarcodeInCart = getItemInCart(appleBarcode);
    expect(appleBarcodeInCart).toBe(1);
    let carrotBarcodeInCart = getItemInCart(bananaBarcode);
    expect((carrotBarcodeInCart)).toBe(1);
})

//test case 7
//to remove item (banana) from the cart.
test('Remove item from cart', () => {
    let bananaBarcode = "01001";
    addItem(bananaBarcode) //action
    let cartBarcode = getItemInCart(bananaBarcode); //action
    expect((cartBarcode)).toBe(1); //assert
    removeItem(bananaBarcode)
    cartBarcode = getItemInCart(bananaBarcode); //action
    expect((cartBarcode)).toBe(0);
})

//test case 8
//to check the tital bill of 2 bananas,1 carrot and 1 apple in the cart.
test('Add 2 bananas, 1 carrot and 1 apple in the cart.', () => {
    let bananaBarcode = "01001";
    let appleBarcode = "01002";
    let carrotBarcode = "01003";
    let expectedBill = "2 x  @ Bananas 0.99 = 1.98\n" +
        "1 x  @ Apples 1.31 = 1.31\n" + 
        "1 x  @ Carrots 1.66 = 1.66\n" + 
        "Total = 4.95";
      

    addItem(bananaBarcode)
    addItem(bananaBarcode)
    addItem(appleBarcode)
    addItem(carrotBarcode)
    let bill = getBill();

    expect(bill).toMatch(expectedBill);
    console.log(bill);
})

