/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(film){
    let sum = film.reduce(function(acc, el){
        return Number(acc + el.rate);
    }, 0);

    return +(sum/film.length).toFixed(2);    
}
console.log(ratesAverage);
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (movieArray){
    let dramaArray = movieArray.filter(function(type){
        return type.genre.includes("Drama");
    });
    if (dramaArray.length === 0) return 0;     
    return ratesAverage(dramaArray); // pour la moyenne il suffit de reprendre la fonction précédente
}

console.log(dramaMoviesRate);


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration (movieArray){
   let durationArray = movieArray.sort(function (a, b) {
        if (a.duration < b.duration) return -1;
        if (a.duration > b.duration) return 1;
        if (a.duration === b.duration) {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            if (a.title === b.title) return 0;
        }
    });
    return durationArray;
}
console.log(orderByDuration);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies (moviesArray) {
    let stevenSpielbergMovies = moviesArray.filter(function(oneMovie) {
        return oneMovie.director.includes("Steven Spielberg");
    });
    let dramaArray = stevenSpielbergMovies.filter(function(type){
        return type.genre.includes("Drama");
    });
    if (stevenSpielbergMovies.length === 0) return 0;     
    return dramaArray.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (moviesArray) {
    const orderMovies = moviesArray.sort(function(movieA, movieB) {
        if (movieA.title < movieB.title) return -1;
        if (movieA.title > movieB.title) return 1;
        if (movieA.title === movieB.title) return 0; 
    });
    return orderMovies;

    const newArray = [];
    if (orderMovies.length >= 20) {
        for (let i=0 ; i<20 ; i++) {
            newArray[i] = newArray.push(orderMovies[i]);
        } 
    } else {
        for (let i=0 ; i<orderMovies.length ; i++) {
            newArray[i] = newArray.push(orderMovies[i]);
        }
    }
    return orderMovies;
}

console.log(orderAlphabetically);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes






// BONUS Iteration: Best yearly rate average - Best yearly rate average
