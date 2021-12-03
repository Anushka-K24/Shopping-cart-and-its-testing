const products = new Map();




products.set(
    "01001", {
    barcode: "01001",
    imgTitle: "Bananas",
    name: "Bananas",
    price: 0.99,
}
);
products.set(
    "01002", {
    barcode: "01002",
    imgTitle: "Apples",
    name: "Apples",
    price: 1.31,
}
);
products.set(
    "01003", {
        barcode: "01003",
        imgTitle: "Carrots",
        name: "Carrots",
        price: 1.66
    }
);


function getProductsByBarcode(barcode) {
   let product = products.get(barcode);
    return product;

}

module.exports = { getProductsByBarcode };