/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var total = movies.reduce(function(accumulator, movie){
    return accumulator + movie.rate;
  }, 0);

  var moy = Number((total/movies.length).toFixed(2));

  return moy;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaFilter = movies.filter(function(el){
    return el.genre.includes("Drama");
  });
  if (dramaFilter.length < 1) return 0;
  var moyenne = ratesAverage(dramaFilter);
  return moyenne;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  var sortedMovies = movies.sort(function compare(movie1, movie2){
  if (movie1.duration < movie2.duration) return -1;
  if (movie1.duration > movie2.duration) return 1;
  if ((movie1.duration === movie2.duration) && (movie1.title===movie2.title))  return 0
  });
  return sortedMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average