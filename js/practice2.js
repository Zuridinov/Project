// 051 JSON Формат передачи данных, глубокое клонирование объектов
const person = {
    name: 'Alex',
    tel: '+996550938493',
    parents: {
        mom: 'olga',
        dad: 'mike'
    }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);

// 052 AJAX и общение с сервером
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');  

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status == 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что то пошло не так";
        }
    });
    // status
    // statusText
    // Response
    // readyState


});