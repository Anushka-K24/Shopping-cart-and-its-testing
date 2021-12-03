let {
    getProductsByBarcode
} = require('./products');

let cart = new Map();

function addItem(barcode) {
    let existingItemCount = cart.get(barcode)
    if (existingItemCount === undefined) {
        cart.set(barcode, 1);
    } else {
        cart.set(barcode, ++existingItemCount);
    }
}  


function removeItem(barcode) {
    let existingItemCount = cart.get(barcode)

        cart.set(barcode, --existingItemCount);
}

function getItemInCart(barcode) {
    return cart.get(barcode);
}

function initialiseCart() {
    cart = new Map();
}

function getBill() {
    let bill = "";
    let totalPrice = 0;

    cart.forEach((value, barcode) => {

        let product = getProductsByBarcode(barcode);
        let calculatedPrice = product.price * value;
        totalPrice += calculatedPrice;
        bill += `${value} x  @ ${product.name} ${product.price} = ${calculatedPrice}\n`
        
    })
    bill += "Total = " + totalPrice;
    return bill;
}




module.exports = {
    addItem,
    getItemInCart,
    initialiseCart,
    removeItem,
  
    getBill
};