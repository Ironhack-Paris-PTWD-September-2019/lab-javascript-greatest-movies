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
  if (movie1.duration === movie2.duration) {
    if (movie1.title === movie2.title) {
      return 0;
    } else if (movie1.title < movie2.title) {
      return -1;
    } else {
      return 1;
    }
  }
  });
  return sortedMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
 var dramaSpielberg = movies.filter(function(movie){
   return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
 });
 if (movies.length < 1) {
  return 0;
  } else { 
    return dramaSpielberg.length;
  }
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var moviesOrder = movies.sort(function(movie1, movie2){
    if (movie1.title < movie2.title){
      return -1;
    } else if (movie1.title > movie2.title) {
      return 1;
    } else {
      return 0;
    }
  }).slice(0, 20);
  var twentyFirstMovies = moviesOrder.map(function(titleMovie){
    return titleMovie.title;
  });
  return twentyFirstMovies;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(){
  
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average