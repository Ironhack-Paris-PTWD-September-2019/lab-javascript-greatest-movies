/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(tablo){
    const totalRates = tablo.reduce(function(acc,film){
        return acc + film.rate;
    },0)
    return totalRates / tablo.length;
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(tablo){
    const dramaMovies = tablo.filter(function(film,i){
        return film.genre.includes("Drama");
    })
    if (dramaMovies.length === 0){ return 0};
    return +ratesAverage(dramaMovies).toFixed(2);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(tablo) {
    return tablo.sort(function (a,b) {
        if (a.duration < b.duration) return -1;
        if (a.duration > b.duration) return 1;
        if (a.duration === b.duration) {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        }
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(tablo) {
   var moviesSS = tablo.filter((film) => (film.director === "Steven Spielberg") && (film.genre.includes("Drama")));
   return moviesSS.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(tablo){
    var alphaTablo = tablo.sort(function (a,b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0})
    var alphaTitle = alphaTablo.map(function(film, i){
        return film.title;
    })
    return alphaTitle.slice(0,20);
    }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(tablo){
    var tabloMinutes = tablo.map(function(film,i){ 
        var number = (film.duration).split("h ");
       var numberH = +number[0];
       var numberMin = +number[1].split("min")[0];
       return Object.assign({},tablo, {duration: (numberH*60 + numberMin)});
    })}




// BONUS Iteration: Best yearly rate average - Best yearly rate average
