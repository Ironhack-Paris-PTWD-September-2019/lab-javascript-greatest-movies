/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(list){
    var total = list.reduce((acc, el) => acc+el.rate, 0);
    var moy = total/list.length
    return +(moy.toFixed(2))
}
ratesAverage(movies)

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(list){
    var dramaMovies = list.filter(el => el.genre.includes("Drama"));
    if (dramaMovies.length===0){
        return 0;
    }
    else {
    return ratesAverage(dramaMovies);
    }
}
dramaMoviesRate(movies)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(list){
   var tabDuration = list.map(el => el.duration);
   var sortedList = tabDuration.sort();
   return sortedList;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(list){
    var dramaMovies = list.filter(el => el.genre.includes("Drama"));
    var SpielbergDrama = dramaMovies.filter(el => el.director==="Steven Spielberg");
    return SpielbergDrama.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(list){
    var tabTitle = list.map(el => el.title);
    var alphaList = tabTitle.sort();
    var listof20 =[];
    if(alphaList.length<20){
        return alphaList;
    }
    else{
        for (i=0; i<20; i++)
        {
            listof20.push(alphaList[i])
        }
        return listof20
    }
}

orderAlphabetically(movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(){
    var tabDuration = list.map(el => el.duration);
    for (i=0; i<tabDuration.length; i++){
    if(tabDuration[i][1]="h"){
        tabDuration[i][1]=*60 +
    };
    if (tabDuration.includes("min"){
        tabDuration=tabDuration-"min"
    }
return tabDuration;
}

// sorry on n'a pas trouvé :)

// BONUS Iteration: Best yearly rate average - Best yearly rate average
