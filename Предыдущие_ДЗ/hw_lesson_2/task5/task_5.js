'use strict';

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        default:
            console.log(`Операция ${operation} не распознана!`)
    }
    
}