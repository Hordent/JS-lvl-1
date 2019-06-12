'use strict';

class inputChar {
    getParams() {
        let input = prompt('Введите целое число от 0 до 999');
        if (input === null) {
            console.log('Ввод отменен');
        } else if (+input >= 0 && +input <= 999 && Number.isInteger(+input)) {
            this.units = input % 10;
            this.tens = Math.floor((input % 100) / 10);
            this.hundreds = Math.floor((input % 1000) / 100);
        } else {
            console.log('Введено неверное значение. Введите целое число от 0 до 999');
            this.getParams();
        }
    }
}

const inputObj = new inputChar;
inputObj.getParams();
console.log(inputObj);

