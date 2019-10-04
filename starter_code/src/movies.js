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

        var part1= el.duration.split('h');
        var part2= part1[1].split('min');
        var dureeMinut=Number(part1[0])*60+Number(part2[0]);

        return {
            
                title: el.title,
                year: el.year,
                director: el.director,
                duration: dureeMinut,
                genre: el.genre,
                rate: el.rate
              
        }
                
     })

     var tabInOrderDuration = tabWithMinutes.sort(function(a,b){
         return a-b;
     })
        return tabInOrderDuration;
 }

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies (movies) {
    var spielbergMovies;
    var spielbergDramaMovies;
    var numberMovies;
    
    spielbergMovies = movies.filter(function(el){
        return el.director==='Steven Spielberg';
       
    });

    spielbergDramaMovies = spielbergMovies.filter(function(el1){
        
        return el1.genre.includes("Drama");
        

    });

    var numberMovies = spielbergDramaMovies.length;
    return numberMovies;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    var tabTitle=[];
    tabTitle=movies.map(function(el){
        return el.title;
    })
    var tabInOrderAlpha = tabTitle.sort();
    var tabInOrderAlpha20=tabInOrderAlpha.splice(0,20);
    return tabInOrderAlpha20

    }


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){

       
    var tabWithMinutes = movies.map(function(el){ 

        var part1= el.duration.split('h');
        var part2= part1[1].split('min');
        var dureeMinut=Number(part1[0])*60+Number(part2[0]);

        return {
            
                title: el.title,
                year: el.year,
                director: el.director,
                duration: dureeMinut,
                genre: el.genre,
                rate: el.rate
              
        }
                
     })
     
     return tabWithMinutes;

 }

    
// BONUS Iteration: Best yearly rate average - Best yearly rate average
