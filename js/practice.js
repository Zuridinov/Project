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
