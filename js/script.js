"use strict";
// alert ("Hello");
// const result = confirm ('Are you here?');
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);
// alert('Vam '+answer+' let');
// console.log(typeof(answer));

// const answers = [];
// answers [0] = prompt('Imya', '');
// answers [1] = prompt('Фамилия?', '');
// answers [2] = prompt('Сколько лет?', '');

// document.write(answers);
// console.log(typeof(answers));
// console.log(answers);

// const category = 'toys';
// console.log('https://someurl.com/' + category);
// console.log(`https://someurl.com/${category}/5/6`);


// const user = 'Maga';
// alert(`Hi, ${user}!`);

// const user = [];
// user [0] = prompt('Как ваше имя?');
// alert(`Hi, ${user}!`);
// let id = Symbol ('id');
// alert(id.description);
// console.log(5%2);
// console.log(2+2*2 !== "6");
// const isChecked = true,
//         isClose = false;

// console.log(isChecked || !isClose;);

// const numderOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//         count: numderOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
// };
// const   a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '10'),
//         c = prompt('Один из последних просмотренных фильмов?', ''),
//         d = prompt('На сколько оцените его?', '10');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
/*1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */
// const secondsInAMinute = 60;
// const minuteInAHour = 60;

//Условия урок13
// if (4==4) {
//     console.log("ok!");
//     } else{
//         console.log("error!");
//     }
// 
// const num =50;
// if (num < 49){
//     console.log("error");
//     } else if(num > 100){
//         console.log("Много");
//     }    else {
//         console.log("ok!");
//     }
    //запись при помощи тернарного оператора
//  const num =50;
//если num=50 то ок                  иначе error
// (num === 50) ? console.log("ok!") : console.log("error");
// //конструкция switch модификация if которая поддерживает несколько условий
// const num = 50;
// switch (num) {//конструкция switch идет всегда на строгое сравнение и с числами и со строками
//       case 49:  
//         console.log("Неверно");
//         break;//заканчивает код
//       case 100:
//           console.log("Неверно");
//           break;
//       case 51:
//           console.log("Верно");
//           break;
//       //если ничего не подошло то по умолчанию задается
//       default:
//           console.log("Не в этот раз!!"); 
//           break;
// }
//14 циклы
// let num = 50;
// while (num <= 55) {
//      console.log(num);
//     num++;
//  }
//  do {
//      console.log(num);
//      num++;
//  }
//  while (num < 55);
// let num = 50;
// for(let i = 1; i<8; i++){
// console.log(num);
// num++;
// }


//Урок 15 Практика 2
/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
// const numderOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//         count: numderOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
// };
// for(let i=0;i<2;i++){
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
                
//     if(a != null && b !=null && a != "" && b !="" && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         }else{
//             console.log("error");
//             i--;
//         }
// }
// // personalMovieDB.movies[c] = d;

// if (personalMovieDB.count < 10){
//     console.log("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.count >=10 <30 ){
//     console.log("Вы классический зритель");
// }else if(personalMovieDB.count >= 30){
//     console.log("Вы киноман");
// }else {
//     console.log("Произошла ошибка");
// }
// console.log(personalMovieDB);
//16 Urok
// let num = 20; //глобальная переменная
// function showFirstMessage(text) {//в круглые скобки передаем аргументы функции
//     console.log(text);
//     //num = 10;//переписывает глобальную переменную
//     let num = 10;//console log обращается к глобальной пеперменной и не видит локальную
// }
// showFirstMessage("Hello World!");//вызов функции, обращаемся к имени
// console.log(num);//console log обращается к глобальной пеперменной и не видит локальную
// function calc(a, b){
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret(){//функция работает до того как она создана
//     let num = 50;

//     return num;
// }//точку с запятой не надо

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){//function expression
// console.log("Hello!");
// };//тотчку с запятой надо
// logger();

// const calc = (a, b) =>{ return a + b};//стрелочная функция
// let a = 3;
// function addTwo (x){
//     let ret = x+2;
//     return ret;
// }
// let b = addTwo (a);
// console.log(b);

// let val1 = 2
// function multiplyThis(n) {
// let ret = n * val1
// return ret
//  }
// let multiplied = multiplyThis(6)
//  console.log('example of scope:', multiplied)
// function createCounter() {
//        let counter = 0;
//        const myFunction = function() {
//          counter = counter + 1;
//          return counter;
//        };
//        return myFunction;
//      }

//     const increment = createCounter();
//     const c1 = increment();
//     const c2 = increment();
//     const c3 = increment();
//     console.log('example increment', c1, c2, c3);

// let age = 11;
// let accompanied = false;
// let enterAge = 12;
// console.log(age >= enterAge || accompanied);
// let dinosaurs = [
// "Тираннозавр", 
// "Велоцираптор", 
// "Стегозавр", 
// "Трицератопс", 
// "Брахиозавр", 
// "Птеранодон", 
// "Апатозавр", 
// "Диплодок", 
// "Компсогнат"
// ];
// console.log(dinosaurs[0]);
// dinosaurs[0]="tiran";
// console.log(dinosaurs[0]);

// Unit17

const str = "teSt";
console.log(str.length);
const arr =[1,2,4];
console.log(arr.length);
console.log(str[2]);
// console.log(str[2]="d");
console.log(str.toUpperCase());
console.log(str);
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.slice(3, 10));
console.log(fruit.indexOf("fruit"));//поиск подстроки. с какой позиции начинается слово 01234 если -1 то такого слова нет

const logg = "Hello world";
console.log(logg.slice(6, 10));//worl 0123456789 10
console.log(logg.slice(6, 11));//world c 6-11 но не включая 11
console.log(logg.slice(-4, -2));//or не включая 4 с конца заканчивая второй с конца
console.log(logg.substring(6,5));
console.log(logg.substr(6, 5));//во втором аргументе указывается сколько символов надо вырезать

const num = 12.3;
console.log(Math.round(num));//округляет

const test = "12.2";
console.log(parseInt(test));//из строки число
console.log(parseFloat(test));

