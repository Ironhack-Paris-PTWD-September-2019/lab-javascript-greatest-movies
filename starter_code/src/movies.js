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
function orderAlphabetically(tabMovies){
  var tabTitlesSorted=tabMovies.map(el=>el.title).sort(); 
  if(tabTitlesSorted.length<=20){return tabTitlesSorted}; 
  return tabTitlesSorted.slice(0,20);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(tabMovies){
  var tabModified=tabMovies.map(movie=> {
    return {
      ...movie,
      duration:calculateMinutes(movie)
    }
  }); 
  return tabModified; 

}

function calculateMinutes(movie){
  if(movie.duration.includes("h")&&movie.duration.includes("min")){
  var hmin=Number(movie.duration.split(" ")[0].split("h")[0])*60
  var min= Number(movie.duration.split(" ")[1].split("m")[0])
  var duration= hmin+min
  }else if (movie.duration.includes("h")&&!movie.duration.includes("min")){
    duration=Number(movie.duration.split("h")[0])*60;
  }else if (!movie.duration.includes("h")&&movie.duration.includes("min")){
    duration=Number(movie.duration.split("m")[0])
  }
  return duration;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(tabMovies){
  if(!tabMovies.length){return null};
  if(tabMovies.length===1){return `The best year was ${tabMovies[0].year} with an average rate of ${tabMovies[0].rate}`;};
  var tabYearsUnique=tabMovies.map(movie=>movie.year).filter(onlyUnique); 
  var tabYearsAvgRate=tabYearsUnique.map(year=>{
    var avgYear=Math.round(tabMovies.filter(movie=>movie.year===year).reduce((sum,movie)=>sum+movie.rate/(tabMovies.filter(movie=>movie.year===year).length),0)*100)/100;
    return {year:year, avg:avgYear}
  })
  tabYearsAvgRate.sort(function(a,b){
    if (a.avg>b.avg){return -1}
    else if (a.avg<b.avg){return 1}
    else if (Number(a.year)<Number(b.year)){return -1}
    else if (Number(a.year)>Number(b.year)){return 1}
    else {return 0};

  });

  return `The best year was ${tabYearsAvgRate[0].year} with an average rate of ${tabYearsAvgRate[0].avg}`;
  
}

//function that returns unique values from an array for filter function: regarde si l'index de la valeur est bien le premier index de cette valeur dans le 
//tableau. Si ce n'est pas le cas, renvoie false donc n'est pas prise dans le filtre
function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}