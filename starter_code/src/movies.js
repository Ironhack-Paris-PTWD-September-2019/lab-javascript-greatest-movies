// eslint no-restricted-globals: 'off'

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    return +((arr.reduce((acc, el) => acc + Number(el.rate), 0) / arr.length).toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var dramaMovies = arr.filter((el) => (el.genre.includes("Drama")));
    return dramaMovies.length !== 0 ? ratesAverage(dramaMovies):0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
    return arr.sort(function (movie1, movie2) {
        // Criterion 1: duration
        if (movie1.duration < movie2.duration) return -1;
        if (movie1.duration > movie2.duration) return 1;
        // Criterion 2: title (if same duration)
        if (movie1.title < movie2.title) return -1;
        if (movie1.title > movie2.title) return 1; 
        return 0;
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    // Filter condition: Drama movies by Spielberg
    var moviesBySpielberg = arr.filter((el) => (el.director === "Steven Spielberg" && el.genre.includes("Drama")));
    return moviesBySpielberg.length !==0 ? moviesBySpielberg.length:0;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

    // Order by title
    var arrSorted = arr.sort(function (movie1, movie2) {
        if (movie1.title < movie2.title) return -1;
        if (movie1.title > movie2.title) return 1;
        return 0;
    });

    // Print the first 20 titles only
    return arrSorted.slice(0,20).map((el) => el.title);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    return arr.map((el) => {
        var isHours = el.duration.indexOf("h") !== -1;
        var isMinutes = el.duration.indexOf("min") !== -1;
        var durationMinutes;

        if (isHours && !isMinutes) {
            durationMinutes = (+el.duration.split("h")[0])*60;
        } else if (!isHours && isMinutes) {
            durationMinutes = +el.duration.split("min")[0];
        } else {
            nbHours = +el.duration.split("h ")[0];
            nbMinutes = +el.duration.split("h ")[1].split("min")[0];
            durationMinutes = nbHours*60 + nbMinutes;
        }

        return Object.assign({}, el, {duration: durationMinutes});
    })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {

    if (arr.length === 0) return null;

    // Array of years (unique)
    let years = [], rateAvgByYear = [];

    for (let i = 0; i < arr.length; i++) {
        if (!years.includes(arr[i].year)) {
            years.push(arr[i].year)
        }
    }

    // Determine the average rate (map + ratesAverage) by year (filter)
    rateAvgByYear = years.map((year) => {
        return [year, ratesAverage(arr.filter((el) => el.year === year))];
    })
     console.log("rateAvgByYear", rateAvgByYear)

    // Sort by rate (ASC), then by year (ASC)
    rateAvgByYear.sort(function compare(year1, year2) {
        if (year1[1] < year2[1]) return -1;
        if (year1[1] > year2[1]) return 1;
        if (year1[0] < year2[0]) return -1;
        if (year1[0] > year2[0]) return 1;
        return 0;
    })
  
    var bestRate = rateAvgByYear[rateAvgByYear.length-1][1]; 
    var bestYear = rateAvgByYear.filter(el => el[1] === bestRate)[0][0];

    return `The best year was ${bestYear} with an average rate of ${bestRate}`;
}