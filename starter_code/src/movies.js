/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(tabMovies){
  var sumRates=tabMovies.reduce((sum,movie)=>sum+movie.rate,0);
  return Math.round(sumRates/tabMovies.length*100)/100;
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(tabMovies){
  var dramaMovies=tabMovies.filter(movie=>movie.genre.includes("Drama")); 
  if (!dramaMovies.length){return 0;}
  return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(tabMovies){
  return tabMovies.slice().sort(function(a,b){
    if (a.duration<b.duration){
      return -1; 
    } else if (a.duration>b.duration){
      return 1;
    } else if (a.duration===b.duration){
        if (a.title<b.title){
          return -1;
        } else if(b.title<a.title){
          return 1; 
        } else {
          return O;
        }
    }
  });
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(tabMovies){
    var dramaSSMovies=tabMovies.filter(movie=>movie.genre.includes("Drama")&& (movie.director==="Steven Spielberg")); 
    if (!dramaSSMovies.length){return 0;}
    return dramaSSMovies.length; 
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
/*var hmin=Number(movie.duration.split(" ")[0].split("h")[0])*60
var min= Number(movie.duration.split(" ")[1].split("m")[0])
var duration= hmin+min*/

// BONUS Iteration: Best yearly rate average - Best yearly rate average
