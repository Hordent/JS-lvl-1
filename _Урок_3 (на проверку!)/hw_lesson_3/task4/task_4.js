'use strict';
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    }, {
        id: 8,
        price: 78
    }
];

let newProducts = products.filter(function (elem) {
    if ('photos' in elem) {
        return elem;
    }
   
});

newProducts.sort(function(a, b) {
    return a.price - b.price;
});

