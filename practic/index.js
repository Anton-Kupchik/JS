
let str = 'abcde' 
// выводит первую букву а
console.log(str[0]) 
// выводит вторую букву b
console.log(str[1])
// выводит 3600 кол-во секунд в часу
console.log(60*60);

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
console.log(num)

let nun = 3;
console.log(nun);

let a = 10;
let b = 2;
console.log(a+b);
console.log(a-b)
console.log(a*b)
console.log(a/b)

let c = 15;
let d = 2;
let result = c + d;
console.log(result);

let t = 17;
let r = 10;
let v = t - r;
let o = 7;
let resultat = v + o;
console.log(resultat);

let strkk = 'Hi World!'
console.log(strkk)

let str1 = 'Hi';
let str2 = 'World';

console.log(str1 + ' ' + str2)

let name = 'Anton';
console.log('Hi' + ' ' + name)

let age = 18;
console.log('I am' + ' ' + age + ' ' + 'year')

// prompt('Your Name?','Roy');
// alert('Your Name - Roy');

// произведение всех чисел внутри строки
let nuk = '12345';
let resultik = nuk[0] * nuk[1] * nuk[2] * nuk[3] * nuk[4];
console.log(resultik)

// выводит время в формате 11:15:45
let hour = '11';
let minute = '15';
let sec = '45';
console.log(hour + ':' + minute + ':' + sec)

let arr = ['a', 'b', 'c'];
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

// выводим a+b,c+d
let arrb = ['a', 'b', 'c', 'd'];
console.log(arrb[0] + '+'  + arrb[1], arrb[2] +  '+' + arrb[3])

let arrm = [2, 5, 3, 9];
let res = (arrm[0] * arrm[1]) + (arrm[2] * arrm[3]);
console.log(res)
// выводим на экран 3 ,через ключ и через св-во объекта
let obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c);
// выводим зарплаты Пети и Коли
let obd = {Kolya: '1000', Petya: '2000', Vasya: '3000'};
console.log(obd.Kolya + ' ' + 'and' + ' ' + obd.Petya)
// выводим fri
let week = {1: 'mon', 2: 'tue', 3: 'wen', 4: 'thu', 5: 'fri', 6: 'sat', 7: 'sun'};
console.log(week[5])
// выводим цифру 4
let arrf =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arrf[1][0])
// выводим Jquery
let obf = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obf.js[0])
// выводим понедельник and fri
let arrs = {
    'ru' :['понедельник', 'вторник', 'среда', 'четверг', 'пятница'],
    'en' :['mon', 'tue', 'wed', 'thu', 'fri'],
};
console.log(arrs.ru[0] + ' ' + 'and' + ' ' + arrs.en[4]);
// Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let q = 1;
if (q == 0) console.log('Good!'); else console.log('NoGood!');
let qw = 0;
if (qw == 0) {console.log('Good!');} else {console.log('NoGood!')};
let qwe = -3;
if (qwe == 0) console.log('Good!'); else console.log('NoGood!');
// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let qwer = 1;
if (qwer > 0) console.log('Good!'); else console.log('NoGood!');
let qwert = 0;
if (qwert > 0) console.log('Good!'); else console.log('NoGood!');
let qwerty = -3;
if (qwerty > 0) console.log('Good!'); else console.log('NoGood!');
// Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0.
let qwer1 = 1;
if (qwer1 >= 0) console.log('Good!'); else console.log('NoGood!');
let qwer2 = 0;
if (qwer2 >= 0) console.log('Good!'); else console.log('NoGood!');
// Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0.
let qwer3 = 1;
if (qwer3 <= 0) console.log('Good!'); else console.log('NoGood!');
let qwer4 = 0;
if (qwer4 <= 0) console.log('Good!'); else console.log('NoGood!');
//  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 3.
let qwer5 = 'test';
if (qwer5 == 'test') console.log('Good!'); else console.log('NoGood!');
let qwer6 = 'test';
if (qwer6 == '3') console.log('Good!'); else console.log('NoGood!');
// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
let qwer7 = '1';
if (qwer7 === '1') console.log('Good!'); else console.log('NoGood!');
let qwer8 = 1;
if (qwer8 === '1') console.log('Good!'); else console.log('NoGood!');
let qwer9 = 3;
if (qwer9 === '1') console.log('Good!'); else console.log('NoGood!');
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной
let test = true;
if (test == true) {console.log('Good!');}else {console.log('NoGood!');}
if (test) console.log('Good!');else console.log('NoGood!');
let test1 = false;
if (test1) console.log('Good!');else console.log('NoGood!');
if (test1 == true) console.log('Good!');else console.log('NoGood!');
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test2 = true;
if (test2 != true) console.log('Good!');else console.log('NoGood!');
if (!test2) console.log('Good!');else console.log('NoGood!');
let test12 = false;
if (!test12) console.log('Good!');else console.log('NoGood!');
if (test12 != true) console.log('Good!');else console.log('NoGood!');
//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, 2.
let aq = 5;
if (aq > 0 && aq < 5) console.log('Good!');else console.log('NoGood!');
let aq1 = 0;
if (aq1 > 0 && aq1 < 5) console.log('Good!');else console.log('NoGood!');
let aq2 = 2;
if (aq2 > 0 && aq2 < 5) console.log('Good!');else console.log('NoGood!');
// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3.
let as = 5;
if (as == 0 || as == 2) {(as += 7);} else{(as /= 10);}
console.log(as)

let as1 = 0;
if (as1 == 0 || as1 == 2) {(as1 += 7);} else{(as1 /= 10);}
console.log(as1)
let as12 = -3;
if (as12 == 0 || as12 == 2) {(as12 += 7);} else{(as12 /= 10);}
console.log(as12)
// //  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 3 и 5.
let az = 1;
let bz = 3;
if (az <= 1 && bz >= 3) console.log(az + bz); else console.log(az - bz);

let az1 = 3;
let bz1 = 5;
if (az1 <= 1 && bz1 >= 3) console.log(az1 + bz1); else console.log(az1 - bz1);
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
let azx = 1;
let bzx = 3;
if (2 < azx < 11 || 6 <= bzx < 14) console.log('Good'); else console.log('NoGood');
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
let nume = '1';
switch(nume) {
    case '1':
        console.log('winter');
        break;
    case '2':
        console.log('autumn');
        break;
    case '3':
        console.log('summer');
        break;
    case '4':
        console.log('spring'); 
}
//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 25;

if (day >= 0 && day < 10) {
    console.log('First decada');
}
if (day > 10 && day < 20) {
    console.log('Second decada');
}
if (day > 20 && day < 31) {
    console.log('Third decada');
}
//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 7;

if (month >= 0 && month < 3) {
    console.log('Winter');
}
if (month > 3 && month < 6) {
    console.log('Spring');
}
if (month > 6 && month < 9) {
    console.log('Summer');
}
if (month > 9 && month <= 12) {
    console.log('Autumn');
}
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let aqq = 'abcde';
if (aqq[0] == 'a') console.log('Yes'); else console.log('No'); 
// Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let numet = '12345';
if (numet[0] == '1' || numet[0] == '2' || numet[0] == '3' ) console.log('Yes'); else console.log('No');
// Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
let sumer = '256';
resulter = +sumer[0] + +sumer[1] + +sumer[2];
console.log(resulter)
// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let sumert = '123323';
if (+sumert[0] + +sumert[1] + +sumert[2] == +sumert[3] + +sumert[4] + +sumert[5]) console.log('Yes'); 
else console.log('No'); 
// Выведите столбец чисел от 1 до 100.
let i = 1;
for (let i = 1; i <= 100; i++ ) {
    console.log(i)
}
//  Выведите столбец чисел от 11 до 33.
let j = 1;
for (let j = 1; j <= 33; j++) {
    console.log(j)
}
//  Выведите столбец четных чисел в промежутке от 0 до 100.
let f = 1;
for (let f = 0; f <= 100; f++) {
    if (f % 2 == 0) {
        console.log(f);
    }
}
// С помощью цикла найдите сумму чисел от 1 до 20.
let resalt = 1;
let arrd = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i = 1; i < arrd.length; i++) {
    resalt += arrd[i];
}
console.log(resalt)
//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let arrt = [1,2,3,4,5];
for (let i = 0; i < arrt.length; i++) {
    console.log(arrt[i]);
}
//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
let arrty = [1,2,3,4,5];
let resalt1 = 0;
for (let i = 0; i < arrty.length; i++) {
    resalt1 += arrty[i];
}
console.log(resalt1)
// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
let obja = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (let key in obja) {
    console.log(key);
    // console.log(obja[key]);
}
let objar = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (let key in objar) {
     console.log(objar[key]);
}
// Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
let objec = {Kolya: '200', Petya: '300', Vasya: '500'}
for (let key in objec) {
    console.log(key + ' ' + '-' + ' ' + 'debet' + ' ' + objec[key] + ' ' + 'dollars');
}
//  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
let arro = [2,5,9,15,0,4];
for (let i = 0; i < arro.length; i++) {
    if (arro[i] > 3 && arro[i] < 10) {
        console.log(arro[i])
    }
}
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let arro1 = [1,2,3,4,5,-1,-2,-3,-4];
let resilt = 0;
for(let i = 0; i < arro1.length; i++) {
    if (arro1[i] > 0) {
     resilt += arro1[i];
     
    }
}
console.log(resilt)
//  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
let arro2 = [1,2,3,5,9,4,13,10];
for(let i = 0; i < arro2.length; i++){
    if (arro2[i] == 4){
        console.log('Yes!');
    }
}
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arro3 = ['10','20','30','50','235','3000'];
for (let i = 0; i < arro3.length; i++) {
    if (arro3[i][0] == '1' || arro3[i][0] == '2' || arro3[i][0] == '5') {
        console.log(arro3[i]);
    }
}
//  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
let a11 = 10;
let b11 = 3;
console.log(a11 % b11)
// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
let a12 = 2;
let b12 = 2;
res12 = a12 % b12;
if (res12 == 0) console.log(res12 + ' ' + 'Good!'); else console.log(res12 + ' ' + 'NoGood!'); 
// Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2,10);
console.log(st)
// Найдите квадратный корень из 245.
let st1 = Math.sqrt(245);
console.log(st1)
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr111 = [4,2,5,19,13,0,10];
sum111 = 0;
for (let i = 0; i < arr111.length; i++) {
     sum111 += arr111[i]
       
}
console.log(Math.sqrt(sum111))
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let st4 = 379;
let res4 = Math.sqrt(st4);
console.log(res4);
console.log(Math.round(res4));
console.log(Math.ceil(res4));
console.log(Math.floor(res4));
console.log(res4.toFixed(5));
console.log(res4.toPrecision(3));
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let st5 = 587;
let res5 = Math.sqrt(st5);
let objar1 = {floor: Math.floor(res5), ceil: Math.ceil(res5)};
console.log(res5);
console.log(objar1);
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.max(4,-2,5,19,-130,0,10));
console.log(Math.min(4,-2,5,19,-130,0,10));
// Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1,100))
// Заполните массив 10-ю случайными целыми числами
let arrd1 = [];
for (let i = 0; i < 10; i++) {
    arrd1[i] = Math.floor(Math.random() * (100 -1 + 1)) + 1; 
}
console.log(arrd1)
// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let aq4 = -9;
let bq4 = -7;
let razn = aq4 - bq4;
console.log(Math.abs(razn))
// Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5.
let aq3 = 3;
let bq3 = 5;
let cq3 = Math.abs(aq3 - bq3);
console.log(cq3)
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arrd15 = [12,15,20,25,59,79];
let srar = 0;
for (let i = 0; i < arrd15.length; i++) {
    srar += arrd15[i]/arrd15.length
}
console.log(srar)
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
let hrew = 'aaa@bbb@ccc';
let newHrew = hrew.replace(/@/g,'!');
console.log(hrew)
console.log(newHrew)
//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice). 
let hrew1 = 'aaa bbb ccc';
let newHrew1 = hrew1.substr(4,3); 
let newHrew2 = hrew1.substring(4,7);
let newHrew3 = hrew1.slice(4,7);
console.log(newHrew1);
console.log(newHrew2);
console.log(newHrew3);
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
let daten = '2025-12-31';
let newDaten = daten.split('-').join('/');
console.log(newDaten)
// Дана строка 'js'. Сделайте из нее строку 'JS'.
let sar = 'js'
console.log(sar.toUpperCase())
// Дана строка 'JS'. Сделайте из нее строку 'js'.
let sar1 = 'JS';
console.log(sar1.toLocaleLowerCase())
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let sar2 = 'I learn javaScript!';
console.log(sar2.length)
// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let sar3 = 'I learn javaScript!';
console.log(sar3.substr(2))
console.log(sar3.substring(2,8))
console.log(sar3.slice(0,-12))
console.log(sar3.indexOf('learn'))
console.log(sar3.split(''))
console.log(sar3.split(' '))
// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
let sar4 = 'I learn javaScript and I like play basketball!';
let n = 20;
function getResultt(sar4,n) {
    let resultt = (sar4.length > n) ? sar4.slice(0,n+1) + '...' : sar4;
    return resultt;
}
console.log(getResultt(sar4,n))
// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let sar5 = 'i-learn-javaScript!';
// первая буква в верхнем регистре
let sar6 = sar5[0].toUpperCase() + sar5.slice(1); 
console.log(sar6)
console.log(sar5.split('-').join('!'))
console.log(sar5.replace(/-/g,'!'))
console.log(sar5.split('-'))

// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '2025.12.31'.
let dates = '2025-12-31';
console.log(dates.split('-').join('.'))
//  Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arrew = ['I','Learn','JavaScript','!'];
console.log(arrew.join('+'))

// каждая первая буква заглавная
let strop = 'I learn javaScript and I like play basketball!';
function titleCase(strop) {
    let splitStr = strop.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
         return splitStr.join(' '); 
    }
   
   console.log(titleCase(strop));
    //  Преобразуйте строку 'var_test_text' в 'vartesttext'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
   let stropa = 'var_test_text';
   console.log(stropa.split('_').join(''))
    // Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
   let a23 = ['a','b','c'];
   let b23 = ['1','2','3'];
   let c23 = a23.concat(b23);
   console.log(c23)

   let t23 = b23.concat(a23);
   console.log(t23)
    // Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3
   a23.push(1,2,3);
   console.log(a23)
//    Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
   let y23 = [1,2,3];
   let r23 = [4,5,6];
   let u23 = y23.concat(r23);
   console.log(u23)
//    Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
   console.log(y23.reverse())
//    Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
   r23.push(4,5,6);
   console.log(r23)
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
   r23.unshift(1,2,3);
   console.log(r23)

   let p23 = y23.concat(r23,'jordan','23')
   console.log(p23)
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
   let ry = ['js','css','jq'];
   let ry1 = ry.shift();
   console.log(ry1)
//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
   let ry2 = ry.pop();
   console.log(ry2)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
   let ry3 = [1,2,3,4,5];
   let ry4 = ry3.slice(2);
   console.log(ry4)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
   let ry5 = ry3.slice(0,3);
   console.log(ry5)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
   ry3.splice(1,2)
   console.log(ry3)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
   let ry37 = [1,2,3,4,5];
   let ry38 = ry37.splice(1,3)
   console.log(ry38)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
   let ry39 = [1,2,3,4,5];
   ry39.splice(3,0,'a','b','c');
   console.log(ry39)
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
   let ry32 = [1,2,3,4,5];
   ry32.splice(1,0,'a','b');
   ry32.splice(6,0,'c');
   ry32.splice(8,0,'e');
   console.log(ry32)
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
   let ry41 = [3,4,1,-2,7];
   ry41.sort();
   console.log(ry41)
//    Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей и значений
   let ry42 = {js:'test',jq: 'hello',css:'world'};
   console.log(Object.values(ry42))
   console.log(Object.keys(ry42))
// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
    let yod = 'i like play basketball';
    let yod1 = yod[0].toUpperCase() + yod.slice(1);
    console.log(yod1)

let strik = 'hello';
strik = strik.split('');
strik[0] = strik[0].toUpperCase();
let resk = strik.join('');
console.log(resk);
// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
let strik1 = '123456';
resk1 = strik1.split('').reverse().join('');
console.log(resk1)
// Проверьте, что строка начинается на http://. 
var str22 = 'http://phphtml';
if (str22.slice(0, 7) == 'http://') {
	console.log('Да');
} else {
	console.log('Нет');
}
// Проверьте, что строка заканчивается на .html.

let str28 = 'index.html';
if (str28.slice(-5) == '.html') {
    console.log('Yes');
}
else {
    console.log('No');
}

// Сделайте функцию, которая возвращает куб числа. Число передается параметром.
function cube($num) {
    return $num * $num * $num
}
//  Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function square(param) {
    return Math.sqrt(param)
}
console.log(square(16))
// Сделайте функцию, которая возвращает сумму двух чисел.
function sum(param) {
    return param + param
}
console.log(sum(5))
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function getFoo(stor1,stor2,stor3) {
    return (stor1 - stor2) / stor3; 
}
console.log(getFoo(20,5,3))
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на eng языке.
function weeke(day) {
    let objaaa = {1:'mon',2:'tue',3:'wed',4:'thu',5:'fri',6:'sat',7:'sun'};
    return objaaa[day];
}
console.log(weeke(4))
// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

let assy = [1,2,3,4,5,6,7,8];
let flag = false;
for(let i = 0; i < assy.length; i++) {
    if (assy[i] == 5) {
        flag = true;
        break;
    }
}
if (flag === true) {
    console.log('Yes');
} else {
    console.log('No');
}
// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'
let numb11 = 31;
let flag1 = false;
for (let i = 2; i < 30;i++) {
    if (numb11 % i == 0) {
        flag1 = true;
        break;
    }
} 
if (flag1 === true) {
    console.log('true');
} else {
    console.log('false');
}
// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
let numb22 = [1,2,2,4,5,6,7,8]; 
let flag11 = false;
for (let i = 0; i < numb22.length;i++) {
    if (numb22[i] == numb22[i-1]) {
        flag11 = true;
        break;
    }
} 
if (flag11 === true) {
    console.log('yes');
} else {
    console.log('no');
}

//  Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function func(a,b) {
    return a > b;
}
console.log(func(a,b))

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function func1(a,b) {
    return (a + b) > 10;
}
console.log(func1(a,b))

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
function func2(a) {
   return a < 0;
}
console.log(func2(-2))

// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
let foot = '';
for (let i = 1; i <= 9; i++) {
    foot +=i;
}
console.log(foot)

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
let foot1 = '';
for (let i = 1; i <= 9; i++) {
    foot1 +=i;
    foot1Reverse = foot1.split('').reverse().join('')
}
console.log(foot1Reverse)

let foot4 = '';
for (let i = 9; i > 0; i--){
    foot4 += i;
}
console.log(foot4)

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
let foot5 = '';
for (i = 0; i < 10; i++) {
    foot5 += i + '-';
    foot6 = foot5.split('').slice(1).join('');
}
console.log(foot6)

//Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
 let foot7 = '';
 for (let i = 0; i < 20; i++) {
     foot7 += 'x';
     console.log(foot7)
 }
//  С помощью двух вложенных циклов нарисуйте следующую пирамидку:

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write('<br>');
}
// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
let foot8 = '';
for (let i = 0; i < 5; i++) {
    foot8 += 'xx';
    console.log(foot8)
}

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
let abb = [];
abb1 = 'x';
for (let i = 0; i < 10; i++) {
    abb.push(abb1);
    abb1 += 'x';
}
console.log(abb)

// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
let abb3 = [];
for (let i = 1; i <=9; i++) {
    let abb4 = '';
    for (let j = 1; j <= i; j++) {
        abb4 += i;
    }
    abb3.push(abb4);
}
console.log(abb3)

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']
function arrayFill(value,length) {
    let abb5 = [];
    for (let i = 0; i < length; i++) {
        abb5.push(value);
    }
    return abb5;
}
console.log(arrayFill('x',7))

//  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
function func3(abb6) {
    let sum = 0;
    for (let i = 0; i < abb6.length; i++) {
        sum += abb6[i];
        if (sum > 10) {
            return i + 1;
        }
    }
}
console.log(func3([1,2,3,4,5,6,7,8]))

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
let abb7 = [1,2,3,4,5,6,7,8,9];
let resAbb7 = [];
for (i = abb7.length - 1; i >= 0; i--) {
    resAbb7.push(abb7[i]);
}
console.log(resAbb7)

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let abb8 = [[1,2,3],[4,5,6],[7,8,9]];
let sumAbb8 = 0;
for (let i = 0; i < abb8.length; i++) {
    for (let j = 0; j < abb8[i].length; j++) {
        sumAbb8 += abb8[i][j];
    }
}
console.log(sumAbb8)

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let abb9 = [[[1,2],[3,4],[5,6],[7,8]]];
let sumAbb9 = 0;
for (let i = 0; i < abb9.length; i++) {
    for (let j = 0; j < abb9[i].length; j++) {
        for (let k = 0; k < abb9[i][j].length; k++)
        sumAbb9 += abb9[i][j][k];
    }
}
console.log(sumAbb9)
// forEach 
let aj1 = ['apple','lemon','tea'];
aj1.forEach(function(element){
    console.log(aj1)
});
// Давайте найдем сумму элементов этого массива:
let aj10 = [1,2,3,4,5,6];
let sum10 = 0;
aj10.forEach(function(elem) {
    sum10 += elem;
});
console.log(sum10)

//  filter
let aj3 = ['apple','lemon','tea'];
let aj4 = aj3.filter(aj3 => aj3.length > 4);
console.log(aj4)
let aj5 = [1,2,3,13,15,20];
let aj6 = aj5.filter(aj5 => aj5 > 10);
console.log(aj6)
// Создадим массив, каждый элемент которого вдвое больше соответствующего элемента начального массива:
let aj7 = [5,1,2,4];
let newAj7 = aj7.map(function(elem){
    return elem * 2;
});
console.log(newAj7)

// Создадим массив, каждый элемент которого получается так - значение элемента умножается на его порядковый номер в массиве
let aj8 = [1,2,3,4,5,6];
let newAj8 = aj8.map(function(elem,index){
    return elem * index;
})
console.log(newAj8)

// Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
let agg = [1,2,3,-1,-2,-3];

function isPositive(num) {
    if (num >= 0) {
        return true;         
    } else {
        return false;
    }
}
let newAgg = [];
for (let i = 0; i < agg.length; i++) {
    if (isPositive(agg[i])) {
        newAgg.push(agg[i])
    }
}
console.log(newAgg)

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false
    }
}
console.log(isNumberInRange(6))

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
let agg1 = [1,3,9,15,17,-3,-7];
let newAgg1 = [];
for (let i = 0; i < agg1.length; i++) {
    if (isNumberInRange(agg1[i])) {
        newAgg1.push(agg1[i])
    }
}
console.log(newAgg1)

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(digit) {
   return (digit + '').split('').map(function(item){
       return item * 1;
   }).reduce(function(sum,item){
       return sum + item;
   })
}
console.log(getDigitsSum(12))

// Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
let agg3 = [];
for (let i = 1; i <= 2019; i++){
    if (getDigitsSum(i) === 13) {
        agg3.push(i)
    } 
}
console.log(agg3)

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(even) {
    if (even % 2 === 0) {
        return true;
    }else {
        return false
    }
}
console.log(isEven(4))

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
let agg4 = [1,2,3,4,5,6];
agg4res = [];
for (let i = 0; i < agg4.length; i++) {
    if (isEven(agg4[i])) {
        agg4res.push(agg4[i])
    }
}
console.log(agg4res)

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
    let agg5 = [];
    for (let i = 1; i <= num; i++){
        if (num % i === 0) {
            agg5.push(i);

        }
    }
    return agg5
}
console.log(getDivisors(20))

// реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент с таким значением или нет. Первым параметром функция должна принимать значение, а вторым - массив. Если такой элемент есть - функция должна вернуть true, а если нет - false.
function inArray(value, agg7) {
	for (var i = 0; i < agg7.length; i++) {
		if(agg7[i] == value) {
			return true;
		}
	}

	return false;
}

let agg7 = [1, 2, 3, 4, 5];
console.log((inArray(3, agg7))); 
// реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет. Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа). Если число простое - функция должна вернуть true, в противном случае false
function isSimple(num) {
	for (let i = 2; i < num; i++) {
		if(num % i == 0) {
			return false;
		}
	}

	return true;
}

console.log((isSimple(13)));

// реализуйте функцию getIntersection, которая параметрами будет принимать два массива и возвращать массив элементов, которые есть и в одном, и во втором массиве (это называется пересечение массивов). К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].
function getIntersection(arr1, arr2) {
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if(inArray(arr1[i], arr2)) {
			result.push(arr1[i]);
		}
	}

	return result;
}

console.log((getIntersection([1, 2, 3], [2, 3, 4])));
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
let strok = ('i like play');
function ucfirst(strok) {
    return strok[0].toUpperCase() + strok.slice(1)
}
console.log(ucfirst(strok))
strok = strok.split(' ').map(function(item){
    return ucfirst(item);
}).join(' ');
console.log(strok)

// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
let strok1 = 'var_text_hello';
let arstrok1 = strok1.split('_');
for (let i = 0; i < arstrok1.length; i++) {
    arstrok1[i] = ucfirst(arstrok1[i]);
}
strok1 = arstrok1.join('');
console.log(strok1)

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
function inArray1(text,agg8) {
    for (let i = 0; i < agg8.length; i++){
        if (agg8[i] == text) {
            return true;
        }
    }
    return false;
}
let agg8 = [ 'I', 'like', 'play'];
console.log(inArray1('I',agg8))

// Дана строка, например, '123456'. Сделайте из нее '214365'.
let strok4 = '123456';
let strok5 = strok4.split('');
for (let i = 0; i < strok5.length; i++){
    if (i % 2 !== 0) {
        let bb = strok5[i - 1];
        strok5[i - 1] = strok5[i];
        strok5[i] = bb;
    }
}
strok4 = strok5.join('');
console.log(strok4)

//Код ниже получает из массива строк новый массив, содержащий их длины: 
let axx = ['yes','no','class','room'];
let axxLenngth = axx.map(function(letter){
    return letter.length;
});
console.log(axxLenngth)
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// То есть:
// arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

let axx1 = [1,2,3,4,5];
function getSums() {
    let ress1 = [];
    if (!axx1.length) return ress1;
    let totalSum = axx1.reduce(function(sum,item) {
        ress1.push(sum);
        return sum + item;
    });
    ress1.push(totalSum);
    return ress1
}
console.log(getSums())

// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
let axx3 = [1,2,3,4,5,6];
function getAxx3() {
    console.log(axx3.pop());
    if (axx3.length != 0) {
        getAxx3(axx3);
    }
}
console.log(getAxx3())

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
function sumNum(n) {
    let result = (n + '').split('').map(function(item){
      return item * 1;
    }).reduce(function(sum, item){
      return sum + item;
    });
    n = result;
    if (result > 9) { 
      return sumNum(n);
    }
    console.log(n);
  }
  
  sumNum(998);
  
//  Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i)
} 
// Выведите с помощью цикла столбец чисел от 100 до 1
for (let i = 100; i > 0; i--) {
    console.log(i)
}
//  Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
// Заполните массив 10-ю иксами с помощью цикла
let axx7 = [];
for (let i = 0; i < 10; i++) {
    axx7[i] = 'x'; 
}
console.log(axx7)

// Заполните массив числами от 1 до 10 с помощью цикла.
let axx8 = [];
for (let i = 1; i <= 10; i++) {
    axx8.push(i); 
}
console.log(axx8)
// Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
let axx9 = [];
for (let i = 0; i < 10; i++) {
    axx9.push(Math.random().toFixed(2));
}
console.log(axx9)

// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
let axx10 = [];
for (let i = 0; i < 10; i++) {
    axx10.push(Math.floor(Math.random() * 10));
    
}
console.log(axx10)
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
axx11 = [1,2,3,13,15,22,8,7];
for (let i = 0; i < axx11.length; i++) {
    if (axx11[i] > 0 && axx11[i] < 10) {
        console.log(axx11[i])
    }
}
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
let axx12 = [1,3,4,8,9,5,12];
for (i = 0; i < axx12.length; i++) {
    if (axx12[i] == 5) {
        console.log('Yes');
        break;
    }
}
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива
let axx13 = [1,3,4,5,7,9];
let sumaxx13 = 0;
for (let i = 0; i < axx13.length; i ++) {
    sumaxx13 += axx13[i];
}
console.log(sumaxx13)
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let axx14 = [1,3,4,5,7,9];
let sumaxx14 = 0;
for (let i = 0; i < axx14.length; i ++) {
    sumaxx14 += axx14[i] * axx14[i];
}
console.log(sumaxx14)

// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). 
let axx15 = [1,2,3,5,6];
let sraxx15 = 0;
for (let i = 0; i < axx15.length; i++) {
    sraxx15 += axx15[i] / axx15.length;
}
console.log(sraxx15)

// Повторите поведение кнопки по нажатию на нее (она меняет текст в инпуте):
function buttonClick() {
    let input = document.getElementById('input');
    input.value = '!!!';
}
// Повторите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута):
function buttonClick1() {
    let input1 = document.getElementById('input1');
    console.log(input1.value);
}
// Повторите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута, возведенное в квадрат)
function buttonClick2() {
    let input1 = document.getElementById('input1');
    let number11 = Number(input1.value);
    let square = number11*number11;
    console.log(square);
}

// Повторите поведение кнопки по нажатию на нее (она осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов):
function buttonClick3() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input1Value = input1.value;
    let input2Value = input2.value;
    input1.value = input2Value;
    input2.value = input1Value;
}

// Повторите поведение кнопки по нажатию на нее (поменяется ее текст):
function buttonClick4(elem) {
    elem.value = 'New text!';
}
// Повторите страницу по данному по образцу:
function buttonClick8() {
    let input8 = document.getElementById('input8');
    console.log(input8.value);
}
// Повторите страницу по данному по образцу:
function buttonClick9() {
    let input9 = document.getElementById('input9');
    input9.value = 'New text!' 
}
// Повторите страницу по данному по образцу:
function buttonClick11(elem) {
    elem.value = 'Click me!'
}
//  Повторите страницу по данному по образцу:block
function buttonClick12(elem) {
    let input12 = document.getElementById('input12')
    input12.disabled = true;
    elem.value = 'Block!';
}

// Повторите страницу по данному по образцу change text
function buttonClick13(elem) {
    elem.value = 'Jordan super!'
}

// Повторите страницу по данному по образцу change color text and width css
function buttonClick14() {
    let input14 = document.getElementById('input14');
    input14.style.color = 'red';
    input14.style.width = '250px';
}
// Повторите страницу по данному по образцу change color text and text css
function buttonClick15() {
    let input15 = document.getElementById('input15');
    input15.value = 'New text!';
    input15.style.color = 'red';
    input15.style.height = '40px';
    input15.style.borderRadius = '5px';

}
// Повторите страницу по данному по образцу: change text in 2 input
function buttonClick16() {
    let input16 = document.getElementById('input16');
    let input17 = document.getElementById('input17');
    input16Value = input16.value;
    input17Value = input17.value;
    input16.value = input17Value;
    input17.value = input16Value;
} 
// По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута.
function buttonClick17() {
    let input18 = document.getElementById('input18');
    let input19 = document.getElementById('input19');
    let number18 = Number(input18.value);
    input19.value = number18*number18;
}
// Повторите страницу по данному по образцу: Кнопка считает кол-во нажатий по ней.
function buttonClick18() {
    let input20 = document.getElementById('input20');
    let number20 = Number(input20.value);
    input20.value = number20 + 1; 
}

// <!-- Повторите страницу по данному по образцу:При нажатии на кнопку текст в абзаце поменяется.одно слово станет жирным 
function btnClick() {
    let elem20 = document.getElementById('elem20');
    elem20.innerHTML = 'Ky ky! I am <b>foo</b>!';
}
// Повторите страницу по данному по образцу: Абзац превратился в h3! 
function btnClick1() {
    let elem21 = document.getElementById('elem21');
    elem21.outerHTML = '<h3><b>Ky ky! I am foo!</b><h3>';
}
// Повторите страницу по данному по образцу:При нажатии на кнопку абзац станет h3, но текст останется.
function btnClick2() {
    let elem22 = document.getElementById('elem22');
    elem22.outerHTML = '<h3><b>Click me!</b><h3>';
}
// Повторите страницу по данному по образцу:При нажатии на кнопку текст в каждом абзаце поменяется.
function func11() {
    let elem23 = document.getElementsByTagName('p');
    for (let i = 0; i < elem23.length; i++) {
        elem23[i].innerHTML = 'Jordan air';
    }
}
// Дан HTML код (см. под задачей). Поменяйте содержимое элементов с классом www на их порядковый номер в коде.
function func12() {
    let elem24 = document.getElementsByClassName('www');
    for (let i = 0; i < elem24.length; i++) {
        elem24[i].innerHTML = i + 1;
    }
}
// Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом www на их порядковый номер в коде.
function func13() {
    let elem25 = document.querySelectorAll('p.www1');
    for (let i = 0; i < elem25.length; i++) {
        elem25[i].innerHTML = i + 1;
    }
}
// Повторите страницу по данному по образцу:click - выводит класс абзаца
function func14() {
    let elem26 = document.getElementsByClassName('myClass');
    elem26.getAttribute('class');
}

// Повторите страницу по данному по образцу (при нажатии на кнопку текст в каждом абзаце поменяется на порядковый номер абзаца):
function func15() {
    let elem27 = document.getElementsByTagName('p');
    for (let i = 0; i < elem27.length; i++) {
        elem27[i].innerHTML = i;
    }
}
// Повторите страницу по данному по образцу:При нажатии на кнопку текст в абзаце поменяется.
function btnClick9() {
    let elem29 = document.getElementById('elem28');
    elem29.innerHTML = 'Jordan air'
}
// Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
let elems1 = document.getElementsByTagName('a');
for (let i = 0; i < elems1.length; i++) {
	elems1[i].addEventListener('mouseover', func30);
}

function func30() {
	this.title = this.innerHTML;
}
// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
let elems2 = document.getElementsByTagName('a');
for (let i = 0; i < elems2.length; i++) {
	elems2[i].addEventListener('mouseover', func);
}

function func() {
    this.innerHTML = this.innerHTML + ' (' + this.href + ')';
    this.removeEventListener('mouseover',func);
}

// Дан элемент #elem. Добавьте ему класс www.
let elem29 = document.getElementById('cod');
elem29.classList.add('ww');
console.log(elem29)
// Дан элемент #elem. Удалите у него класс www.
let elem30 = document.getElementById('cod1');
elem30.classList.remove('ww');
console.log(elem30)

// Дан элемент #elem. Проверьте наличие у него класса www.
let elem31 = elem30.classList.contains('ww')
console.log(elem31)

// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
let elem32 = document.getElementById('cod2');
if (elem32.classList.contains('ww')) {
    elem32.classList.remove('ww') 
    } else { 
        elem32.classList.add('ww')
    }
console.log(elem32)
// Дан элемент #elem. Узнайте количество его классов.
let elem33 = document.getElementById('cod3');
let elem34 = elem33.classList.length;
console.log(elem34)

// Дан элемент #elem. Выведите последовательно алертом его классы.
let elem35 = document.getElementById('cod4');
let elem36 = elem35.classList;
for (let i = 0; i < elem36.length; i++) {
    console.log(elem36[i])
} 
// Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу.
let elem37 = document.getElementById('cod5');
elem37.style.cssText = 'color: red; fontsize: 30px; border:1px solid green';
// Дан элемент #elem. По клику на него выведите название его тега.
    let elem38 = document.getElementById('cod6')
    console.log(elem38.tagName)
    console.log(elem38.tagName.toLowerCase())

//Дан ol. Вставьте ему в конец li с текстом 'пункт'.
let elems20 = document.getElementById('elem40');
let elems21 = document.createElement('li');
elems21.innerHTML = 'Punkt';
elems20.appendChild(elems21);

//  Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
let elems43 = [1,2,3];
let elems22 = document.getElementById('elem41');
for (let i = 0; i < elems43.length;i++) {
    let elems23 = document.createElement('li');
    elems23.innerHTML = elems43[i];
    elems22.appendChild(elems23)
}
// Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
let elem45 = document.getElementById('elem44');
elem45.insertAdjacentHTML('beforeBegin','<span>!!!</span>');

// Дан элемент #elem. Вставьте после него span с текстом '!!!'.
let elem47 = document.getElementById('elem46');
elem47.insertAdjacentHTML('beforeEnd','<span>!!!</span>');
// Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
let nof1 = document.getElementById('nof');
nof1.firstElementChild.style.color = ('red');
nof1.lastElementChild.style.color = ('blue');

// Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
let nof4 = document.getElementById('nof3');
let nof5 = nof4.children;
for (let i = 0; i < nof5.length; i++) {
    nof5[i].innerHTML += '!'
}

// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
let nof6 = document.getElementById('nof5');
let nof7 = nof6.previousElementSibling;
nof7.innerHTML += '!'

// Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
let nof10 = document.getElementById('nof9');
let nof11 = nof10.parentElement;
nof11.style.color = 'red';

// Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
let nof15 = document.getElementById('nof11');
let nof16 = nof15.parentElement;
let nof17 = nof16.parentElement.style.color = 'green';

// Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
function nof22() {
    let nof25 = document.getElementById('nof20');
    let nof26 = document.getElementById('nof21');
    nof25.removeChild(nof26)
}

// Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
function nof46() {
    let nof47 = document.getElementById('nof45');
    let nof48 = nof47.lastElementChild
    nof47.removeChild(nof48)
}
// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
function nof51() {
    let nof52 = document.getElementById('nof50')
    let nof53 = nof52.cloneNode(true);
    nof52.appendChild(nof53)
}
// Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
let ul11 = document.getElementById('nof55');

ul11.addEventListener('click',addsign1);
function addsign1() {
    event.target.innerHTML = event.target.innerHTML + '!';
}
let nofbtn2 = document.getElementById('nofbtn1');
nofbtn2.addEventListener('click',addli1);
function addli1() {
    let li20 = document.createElement('li');
    li20.innerHTML = 'Punkt';
    ul11.appendChild(li20);
}

