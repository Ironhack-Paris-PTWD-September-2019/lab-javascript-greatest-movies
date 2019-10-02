/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(films){
    var result = 0; 
    var total = films.reduce(function(accumulator, rating){
        return accumulator+ Number(rating.rate); 
    },0); 
    result = total/films.length; 
    return Number(result.toFixed(2)); 
}; 
console.log(ratesAverage(movies)); 
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    var result = 0; 
    var dramaMovies = arr.filter(function(el){
        return el.genre.indexOf("Drama") !== -1;
    }); 
    if (dramaMovies.length === 0){
        return 0; 
    };
    return ratesAverage(dramaMovies);  
}; 
console.log(dramaMoviesRate(movies)); 

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr){
    arr.sort(function(a,b){
     if (a.duration < b.duration) {
         return -1;
     } else if (a.duration > b.duration){
         return 1;
     } else {
        if(a.title>b.title){
            return 1; 
        } else if (a.title<b.title){
            return -1; 
        } else {
            return 0; 
        }
     }
    });
    return arr; 
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    var result = 0; 
    var dramaSpielbergMovies = arr.filter(function(el){
        return el.director ==="Steven Spielberg" && el.genre.indexOf("Drama")!== -1; 
    });
    if (dramaSpielbergMovies.length===0){
        return 0; 
    }
    return dramaSpielbergMovies.length; 
};


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average