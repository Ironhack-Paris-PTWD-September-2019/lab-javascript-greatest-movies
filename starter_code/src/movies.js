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


//Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {
    films.sort(function(a,b){
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title){
            return 1;
        } else {
            return 0;
        }
       });
       var arrFilms = [];
       for (var i = 0; i < films.length; i++) {
           arrFilms.push(films[i].title);
       }; 
       // j'aurais pu utiliser maps là ? ^
       if (arrFilms.length <= 20) {
           return arrFilms;
       } else {
           return arrFilms.slice(0,20);
       };
   };
   console.log(orderAlphabetically(movies)); 
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(films) {
    var newArrMovies = []; 
    newArrMovies = films.slice();
    
    newArrMovies.forEach (function (el) {
        if (el.duration.length > 5) {
            el.duration = Number(el.duration[0])*60 + Number(el.duration[3]) + Number(el.duration[4]);
        } else if (2 > el.duration.length > 5) {
            el.duration = Number(el.duration[0] + el.duration[1]);
        } else {
            el.duration = Number(el.duration[0])*60;
        }
    });
    return newArrMovies;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average












