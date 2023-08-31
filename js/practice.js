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

// 018 Практика, часть3. Используем функции

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель!')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы Киноман!');
    } else {
        console.log('Произошла ошибка');
    }    
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номерам ${i}`);
    }
}
writeYourGenres();

// 019 CallBack Функции!!
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

// Объекты, деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);


// console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);

// 021 Массивы и псевдомассивы

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const odnok = ['Tima', 'Aibek', 'Tilek', 'Kairat'];

odnok.forEach(function(item, i, odnok) {
    console.log(`${i}: ${item} внутри массива ${odnok}`);
});


// arr.pop();
// arr.push(10);

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

// 022 Передача по ссылке или по значению, Spread оператор

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers);

newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'awdadwad';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

// 023 ООП
let str = "some";

let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const John = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
John.sayHello();


// 024 Практика Используем методы объектов
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель!')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы Киноман!');
        } else {
            console.log('Произошла ошибка');
        }    
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номерам ${i}`);

            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// 026 Динамическая Типизация в JS

// to string

// 1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// to number

// 1)

console.log(typeof(Number('4')));
// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// to boolean

// 1)

// 0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log('working....');
}

switcher = 1;

if (switcher) {
    console.log('working....');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!'4444'));

// 027

// let x = 5;
// alert(x++); // 5

// [] + false - null + true;
// console.log([] + false - null + true); // NaN

// let y = 1;
// let x = y = 2;
// alert(x); // 2

// console.log([] + 1 + 2); // "12"

// alert("1"[0]); // 1

// console.log(2 && 1 && null && 0 && undefined); // null
// && запинается на лжи
// || запинается на правде
// console.log(!!(1 && 2) === (1 && 2)); // false

// alert(null || 2 && 3 || 4);// 3

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b); // false

// 028 Получение элементов со страницы
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const firstButton = document.querySelector('button');
console.log(firstButton);


// 029 Действия с элементами со страницы
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),  
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
div.classList.add('black');
wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);


hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[1]);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');
