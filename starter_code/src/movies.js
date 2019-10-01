/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var rates= array.reduce(function(acc,rev){
        return acc+Number(rev.rate);
    },0);
    return parseFloat((rates/array.length).toFixed(2));
};
console.log(ratesAverage(movies));

 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
var newArray=array.filter(function(movie){
        return movie.genre.indexOf("Drama") >= 0;
    });
var dramaRates=ratesAverage(newArray);
return dramaRates;
};
console.log(dramaMoviesRate(movies));



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function conversion(string){
var hour = string.split("h ")[0];
var newstring = string.split("h ");
var min = newstring[1].split("min")[0];
var duree = Number(hour)*60+Number(min);
return duree;
}

function orderByDuration(movies){
    return movies.sort(function(movieA, movieB) {
        return conversion(movieA.duration) - conversion(movieB.duration);
    });
};


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    var newMovies=movies.filter(function(movie){
            return movie.director.indexOf("Steven Spielberg") >= 0;
        });
    return newMovies.length;
    };
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    return movies.sort(function(movieA, movieB){
        if(movieA.title < movieB.title) { return -1; }
        if(movieA.title > movieB.title) { return 1; }
        return 0;
    })
};


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
