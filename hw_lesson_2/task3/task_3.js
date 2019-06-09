'use strict';

let a = -45;
let b = -33;

if (a >= 0 && b >= 0) {
    console.log(a - b);
}

if (a < 0 && b < 0) {
    console.log(a * b);
}

if ( (a >= 0 && b < 0) || (a < 0 && b >= 0) ) {
    console.log(a + b);
}