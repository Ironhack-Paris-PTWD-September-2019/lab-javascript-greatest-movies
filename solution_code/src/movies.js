/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(films) {
  let sum = films.reduce(function (acc, curr) {
    return acc + Number(curr.rate);
  }, 0);

  return +(sum/films.length).toFixed(2);
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(films) {
  var dramaFilms = films.filter(film => film.genre.indexOf('Drama') !== -1);
  if (dramaFilms.length < 1) return 0;

  return ratesAverage(dramaFilms);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(films) {
  return films.sort(function (a, b) {
    if (a.duration === b.duration) {
      //
      // sort by title if same duration
      //
      if (a.title === b.title) {
        return 0;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    } else if (a.duration < b.duration) {
      return -1; // a before b
    } else {
      return 1; // a after b
    }
  })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(films) {
  return films
    .filter(film => film.genre.indexOf('Drama') !== -1)
    .filter(film => film.director === 'Steven Spielberg')
    .length
  ;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {
  return films
    .map(film => film.title)
    .sort()
    .slice(0,20)
  ;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(films) {
  return films.map(film => {
    let duration = film.duration; // '3h 22min' or '5h' or '22min'

    let hours = 0;
    let mins = 0;

    //
    // 3 cases: '3h 22min' or '5h' or '22min'
    //

    const isH = (duration.indexOf('h') !== -1);
    const isMin = (duration.indexOf('min') !== -1);
    if (isH && isMin) {
      // '3h 22min'

      let hSplit = duration.split('h ');
      let minSplit = hSplit[1].split('min');

      hours = hSplit[0];
      mins = minSplit[0];
    } else if (isH && !isMin) {
      // '5h'
      hours = duration.split('h')[0];
    } else if (!isH && isMin) {
      // '22min'
      mins = duration.split('min')[0]
    }

    let dur = Number(hours)*60+Number(mins);
    return {
      ...film,
      duration: dur
    };
  })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(films) {
  console.log('bestYearAvg', films);
  if (films.length < 1) return null;

  //
  // Extract all unique years from films: ['1999', '2003', '1945']
  //

  let years = [];
  films.forEach(function (film) {
    let year = film.year;

    if (years.indexOf(year) === -1) {
      years.push(year);
    }
  });

  /*
  Compute the avg rate for each year, and store it into an object:
  {
    '1999': 8.6,
    '2003': 3.5,
    '1945': 7
  }
  */

  let avgRatesByYear = {};
  years.forEach(function (year) {
    // Only for films of that year...
    const yearFilms = films.filter(film => film.year === year);

    // ...Sum all the rates
    const totalYearRates = yearFilms.reduce(function (acc, film) {
      return acc + Number(film.rate);
    }, 0);

    // Compute the average rate
    avgRatesByYear[year] = totalYearRates / yearFilms.length;
  });
  
  //
  // loop through our `avgRatesByYear` object and find the best avgRate and the corresponding year
  //

  let bestYear;
  let bestAvgRate = -Infinity;
  Object.keys(avgRatesByYear).forEach(function (year) {
    if (avgRatesByYear[year] > bestAvgRate) {
      bestAvgRate = avgRatesByYear[year];
      bestYear = year;
    }
  })

  return `The best year was ${bestYear} with an average rate of ${bestAvgRate}`;
}