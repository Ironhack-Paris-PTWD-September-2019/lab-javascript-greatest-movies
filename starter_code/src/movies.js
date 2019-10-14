/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(tab){
  var rate = tab.reduce(function(sum,el){
    return sum + el.rate;
  }, 0);
  return rate/tab.length;
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(tab){
  var tab2 = tab.filter(function(el){
    return el.genre.indexOf('Drama') != -1;
  }) ;
  if (tab2.length ==0){
    return 0;
  }
  return Math.round(ratesAverage(tab2)*100)/100;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(tab){
  var tab2 = tab.sort((a,b) => {
    if (a.duration > b.duration){
      return 1;
    }
    if (a.duration < b.duration){
      return -1;
    }

    else {
      if (a.title > b.title){
        return 1;
      }
      if (a.title < b.title){
        return -1;
      }
      return 0;
    }
    
  });

  return tab2;
}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(tab){
  var tab2 = tab.filter(function(el){
    return el.genre.indexOf('Drama') != -1;
  }) ;
  var res = tab2.filter(function(elt){
    return elt.director == 'Steven Spielberg'; 
  });
  return res.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(tab){
  var tab2= tab.map(function(elt){
    return elt.title;
  })

  console.log(tab2);
  var res= tab2.sort();
  return res.slice(0,20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function hoursToMinutes(mystring){
  var indicehours=mystring.indexOf("h");
  var indicem= mystring.indexOf("m");
  if (indicehours!=-1){
    var hours =  mystring.slice(0,indicehours);
    hours=Number(hours)*60;
    if (indicem !=-1){
      var minutes = mystring.slice(indicehours+1, indicem);
      minutes = Number(minutes);
      return hours+minutes;
      }
      return hours;
  }
  if (indicem !=-1){
      var minutes = mystring.slice(0, indicem);
      minutes = Number(minutes);
      return minutes;
      }
  return Number(mystring);
}


function turnHoursToMinutes(tab){
  var tab2 = tab.map(function(elt){
    return {
      title: elt.title,
      year: elt.year,
      director: elt.director,
      duration: hoursToMinutes(elt.duration),
      genre: elt.genre,
      rate: elt.rate
    };
  })

  return tab2;

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
