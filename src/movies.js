// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((movie) => movie.director);
}

/*
function getAllDirectors(movies) {
  return movies.map((movie) => {
    return movie.director;
  });
}
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergDrama = arr.filter(
    (drama) =>
      drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')
  );
  return spielbergDrama.length;
}
/*
function howManyMovies(movies) {
  const dramaMoviesDirectedByStevenSpielberg = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return dramaMoviesDirectedByStevenSpielberg.length;
}

const roundNumberToNDecimalPlaces = (value, n) =>
  Math.round(value * 10 ** n) / 10 ** n;
*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // const rawAverageScore = movies.reduce((accumulator, movie) => {
  //   if (typeof movie.score === 'undefined' || movie.score === '') {
  //     return accumulator;
  //   } else {
  //     return accumulator + movie.score / movies.length;
  //   }
  // }, 0);
  const rawAverageScore = movies
    .map((movie) => movie.score)
    .filter((score) => score !== undefined && score !== '')
    .reduce((sum, score) => sum + score / movies.length, 0);
  return roundNumberToNDecimalPlaces(rawAverageScore, 2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// should return 0 if there is no Drama movie
/*
function dramaMoviesScore(arr) {
  let dramas = arr.filter((drama) => drama.genre.includes('Drama'));
  let sum = dramas.reduce((acc, scr) => {
    return acc + scr.score;
  }, 0);

  let average = sum / dramas.length;
  return Number(average.toFixed(2));
}
*/

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  const averageScoreOfDramaMovies = scoresAverage(dramaMovies);
  return averageScoreOfDramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*
function orderByYear(arr) {
  let ordered = arr.sort(function (a, b) {
    if (a.year - b.year !== 0) {
      return a.year - b.year;
    } else {
      return a.title > b.title ? 1 : -1;
    }
  });

  return [...ordered];
}
*/

function orderByYear(movies) {
  const moviesClone = [...movies];

  moviesClone.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return moviesClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // const titles = movies.map((movie) => movie.title);
  const titles = movies.map((movie) => {
    return movie.title;
  });
  // titles.sort((a, b) => {
  //   return a.localeCompare(b);
  // });
  titles.sort();
  // titles.sort((a, b) => {
  //   if (a > b) {
  //     return 1;
  //   } else if (a < b) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });
  return titles.slice(0, 20);
}

const convertDurationIntoMinutes = (duration) => {
  return duration.split(' ').reduce((sum, value) => {
    return sum + (value.includes('h') ? parseInt(value) * 60 : parseInt(value));
  }, 0);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map((movie) => {
    const minutesDuration = convertDurationIntoMinutes(movie.duration);
    // movie.duration = minutesDuration;
    // return movie;
    // const movieClone = { ...movie };
    // movieClone.duration = minutesDuration;
    // return movieClone;
    return {
      ...movie,
      duration: minutesDuration
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
