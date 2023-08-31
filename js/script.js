"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига Справедливости",
        "Ла-ла ленд",
        "Одержимость",
        "Скотт Пилигрим Против..."
    ]
}

const adv = document.querySelectorAll('.sidebar-2__body img'),
      poster = document.querySelector('.content__main'), 
      genre = poster.querySelector('.content__subtitle'),
      movieList = document.querySelector('.saw__list');

adv.forEach(item => {
    item.remove();
});
genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpeg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="saw__links">${i + 1}: ${film}</li>
    `;
})



















































