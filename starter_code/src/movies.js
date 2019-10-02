/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    var sumRates = movies.reduce(function(sum, movie){
        return sum += +(movie.rate);
    }, 0);

    return +(sumRates / movies.length).toFixed(2);
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    var dramaMovies = movies.filter(function(movie){
        return movie.genre.includes(`Drama`);
    });

    if(dramaMovies.length === 0) return 0;

    return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    var moviesOrderedByDuration = movies.sort(function compare(movie1, movie2) {
        if(movie1.duration > movie2.duration) return 1;
        if(movie1.duration < movie2.duration) return -1;
        if(movie1.duration === movie2.duration) {
            if(movie1.title > movie2.title) return 1;
            if(movie1.title < movie2.title) return -1;
            if(movie1.duration === movie2.duration) return 0;
        }
    });

    return moviesOrderedByDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    var dramaMovies = movies.filter(function(movie){
        return movie.genre.includes(`Drama`);
    });

    if(dramaMovies.length === 0) return 0;

    var moviesDirectedBySpielberg = dramaMovies.filter(function(movie){
        return movie.director.includes(`Steven Spielberg`);
    });

    if (moviesDirectedBySpielberg.length === 0) return 0;

    return moviesDirectedBySpielberg.length;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    var moviesOrderedAlphabetically = movies.sort(function compare(movieA, movieB){
        if(movieA.title > movieB.title) return 1;
        if(movieA.title < movieB.title) return -1;
        if(movieA.title === movieB.title) return 0;
    });

    var titlesOfMoviesOrderedAlphabetically = moviesOrderedAlphabetically.map(function(movie){
        return String(movie.title);
    }); 

    if (titlesOfMoviesOrderedAlphabetically.length < 20) {
        return titlesOfMoviesOrderedAlphabetically;
    } else {
        return titlesOfMoviesOrderedAlphabetically.slice(0,20);
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
