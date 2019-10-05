/* eslint no-restricted-globals: 'off' */

function ratesAverage(films) {
    var totalRates = films.reduce(function (acc, el) {
    return acc + Number(el.rate);
    },0);
    return +(totalRates/films.length).toFixed(2);
}


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function dramaMoviesRate(films) {
    
    // 1. filtrer les films qui sont drama
    var filmsGenre = films.filter(function (type) {
    return type.genre == 'Drama';
    });
    // 2. appeler ratesAverage avec 1.
    return ratesAverage(filmsGenre);
}
 


// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// trier les film par ordre croissant en focntion de la durée

function orderByDuration(films) {
    var sortedFilms = films.sort(function (a, b) {
        if (a.duration > b.duration) return 1;
        if (a.duration < b.duration) return -1;
        if (a.duration === b.duration) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
        }
    });

    return sortedFilms;
}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(films) {
    return films
    .filter(function (type) {
        type.genre == 'Drama';

    })
    .filter(function (auteur){
        auteur.director === 'Steven Spielberg';
    })
    .length 
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
