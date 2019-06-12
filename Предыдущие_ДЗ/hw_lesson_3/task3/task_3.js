'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
];

let discount = 0.5;

let addDiscount = function (value) {
    let newValue = Object.assign({}, value);
    newValue.price *= discount;
    return newValue;
}

let productsWithDiscount = products.map(addDiscount);
console.log(products);
console.log(productsWithDiscount);