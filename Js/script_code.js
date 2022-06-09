"use strict";

const numberOfFilms = +prompt ('Скільки фільмів ви подивились?', '');

const persnalMovieDB = {
    // Personal Movie Data Base
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    // Жанри
    privat: false
};

const   a = prompt('Останній переглянутий вами фільм', ''),
        b = prompt('Як ви його оцінюєте?', ''),
        c = prompt('Останній переглянутий вами фільм', ''),
        d = prompt('Як ви його оцінюєте?', '');

persnalMovieDB.movies[a] = b;
persnalMovieDB.movies[c] = d;

console.log(persnalMovieDB);

