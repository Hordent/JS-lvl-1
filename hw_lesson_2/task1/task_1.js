'use strict';
//пример 1
let a = 1, b = 1, c, d;
c = ++a; 
/*
Сначала увеличили a на 1: a = 2;
Затем присвоили с получившееся значение: c = 2;
*/
alert(c); // ответ: 2

//пример 2
d = b++;
/*
Сначала присвоили d присвоенное ранее значение b:  d = 1;
Затем увеличили b на 1: b = 2;
*/
alert(d); //ответ: 1

//пример 3
c = 2 + ++a;
/*
Сначала увеличили a на 1: a = 3;
Затем сложили 2 и a = 5;
Затем присвоили с значение 5: c = 5;
*/
alert(c); //ответ: 5

//пример 4
d = 2 + b++;
/*
Сначала сложили 2 и b = 4;
Затем присвоили d значение 4: d = 4;
Затем увеличили b на 1: b = 3;
*/

alert(d); //ответ: 4
alert(a); //3
alert(b); //3