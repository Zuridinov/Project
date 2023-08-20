"use strict";

// 005 Переменные и строгий режим
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan';

{
    var result = 50;
}

console.log(result);


// 006 Классификация типов данных в JavaScript
let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const person = `5`;

const bool = false;

let und;
console.log(und);

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);


// 007 Простое общение с пользователем

// alert('Hello');

// const result = confirm("are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));

// 008 Интерполяция
const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`);

// 009 Операторы в JS

console.log('arr' + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 != 8);


const isChecked = false, 
      isClose = false;
      
console.log(isChecked || !isClose);


// 012 Практика Ч.1 Начинаем создавать приложение

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// 013 Условия

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('much');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 51:
        console.log('true');
        break;
    default:
        console.log('no metter');
        break;
}

// 014 Циклы

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 9; i++) {   
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

// 015 Практика циклы и условия

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?","");
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель!')
} else if (personalMovieDB.count >= 30) {
    console.log('Вы Киноман!');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

// 016 Функции и стрелочные функции

let num = 20;

function showFirstMassage(text) {
    console.log(text);
    console.log(num);
}

showFirstMassage("HEllo World!");
console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("hello");
};

logger();

const calc = (a, b) => a + b;


// 017 Методы и свойства строк и чисел
const str = 'test';


console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some Fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello World";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));