/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var totalReview=movies.reduce((sum,elem)=>{
    return sum =sum + Number(elem.rate);
    },0);
  
    var average=(totalReview/movies.length);
    average=Number(average.toFixed(2));
  
    return average;
   
  }
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    
    var newTab=movies.filter (function(el){

        return el.genre.includes("Drama");
    });
   
   if (newTab.length<1) {
       return 0;}
   var dramaAverage = ratesAverage(newTab);
   return dramaAverage;
   }
  
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
 function orderByDuration (movies){
     var tabWithMinutes = movies.map(function(el){ 
         return Number(el.duration[0])*60+Number(el.duration.substring(1));
     })

     var tabInOrderDuration = tabWithMinutes.sort(function(a,b){
         return a-b;
     })
        return tabInOrderDuration;
 }

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (movies) {
    var spielbergMovies = movies.filter(function(el){
        el.director==='Steven Spielberg';
    });

    var spielbergDramaMovies = spielbergMovies.filter (function(el1){

        return el1.genre.includes("Drama");

    });

    var numberMovies = spielbergDramaMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
