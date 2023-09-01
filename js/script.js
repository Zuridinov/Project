"use strict";

document.addEventListener('DOMContentLoaded', () => {
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
          movieList = document.querySelector('.saw__list'),
          addForm = document.querySelector('form.add__films'),
          addInput = addForm.querySelector('.add__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });    
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
   
    const makeChanges = () => {
        genre.textContent = 'Драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpeg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="saw__links">${i + 1}: ${film}</li>
            `;
        });
    }
    deleteAdv(adv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
});















































