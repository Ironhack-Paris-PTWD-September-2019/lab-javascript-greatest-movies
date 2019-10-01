/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies){
    var totalRates = movies.reduce(function(accumulator, element){
        return accumulator + Number(element.rate)
    }
    ,0) 
    var average = +(totalRates/movies.length).toFixed(2)
return average;
}



// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){


    var dramaMovies = movies.filter(function(movie){
        return movie.genre.includes("Drama")
    }
    )
    if (dramaMovies.length === 0){
        return 0
    }
return ratesAverage(dramaMovies)

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {

    movies.sort(function (movieA,movieB) {

            if (movieA.duration < movieB.duration) return -1;  // a is less than b
            if (movieA.duration > movieB.duration) return 1;   // a is greater than b
            if (movieA.duration === movieB.duration) {
                if (movieA.title < movieB.title) return -1;
                if (movieA.title > movieB.title) return 1;
                if (movieA.title === movieB.title) return 0;
            };
    });

    return movies


}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    if (movies.length === 0){
        return 0
    }

    var spielbergMovies = movies.filter(function (movie) {
        return movie.director.includes("Steven Spielberg")
    })


   var spielbergDramaMovies = movies.filter(function(spielbergMovies){
    return spielbergMovies.genre.includes("Drama")
}
)
if (spielbergDramaMovies.length === 0){
    return 0
}
return spielbergDramaMovies.length

}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles





// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
