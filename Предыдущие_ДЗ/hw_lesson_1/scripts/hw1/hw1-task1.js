"use strict";

function task1() {
    let Tc = prompt('Задание 1. Преобразование температуры. Задайте температуру в градусах по Цельсию.');
    if (Tc === null) {
        return;
    }
    do {
        if (isNaN(+Tc)) {
            Tc = prompt('Нужно ввести число. Задайте температуру в градусах по Цельсию или нажмите "Отмена"');
            if (Tc === null) {
                return;
            }
        } else {
            let Tf = (9 / 5) * (+Tc) + 32;
            alert(`Введено значение в градусах по Цельсию: ${Tc}.
                Значение в градусах по Фаренгейту равно: ${Tf}.`)
            break;
        }
    } while (true);
}