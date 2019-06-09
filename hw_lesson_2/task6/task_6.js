'use strict';


let sum = getSum();
let lastChar = getLastChar(sum);
let preLastChar = getPreLastChar(sum);
if (preLastChar === 1) {
    alert(`Ваша сумма в ${sum} рублей успешно зачислена.`);
} else {
    switch (lastChar) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            alert(`Ваша сумма в ${sum} рублей успешно зачислена.`);
            break;
        case 1:
            alert(`Ваша сумма в ${sum} рубль успешно зачислена.`);
            break;
        case 2:
        case 3:
        case 4:
            alert(`Ваша сумма в ${sum} рубля успешно зачислена.`);
            break;
    }
}

/**
 *Получить сумму от пользователя
 *
 * @returns {number}
 */
function getSum() {
    let sum = +prompt("Введите сумму");
    if (isNaN(sum) || sum <= 0) {
        alert("Неверное значение. Значение должно быть числом больше нуля.");
        sum = getSum();
    }

    return sum;
}

/**
 *Получить последний символ числа
 *
 * @param {*} num Сумма, введенная пользователем
 * @returns
 */
function getLastChar(num) {
    let str = String(num);
    let lastChar = str.charAt(str.length - 1);
    return Number(lastChar);
}
/**
 *Получить предпоследний символ числа
 *
 * @param {*} num Сумма, введенная пользователем
 * @returns
 */
function getPreLastChar(num) {
    let str = String(num);
    let lastChar = str.charAt(str.length - 2);
    return Number(lastChar);
}
