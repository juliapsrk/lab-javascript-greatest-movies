// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergDrama = arr.filter(
    (drama) =>
      drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')
  );
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((acc, scr) => {
    if (!scr.score) {
      return acc;
    }
    return acc + scr.score;
  }, 0);

  let average = sum / arr.length;
  return Number(average.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
// should return 0 if there is no Drama movie
function dramaMoviesScore(arr) {
  let dramas = arr.filter((drama) => drama.genre.includes('Drama'));
  let sum = dramas.reduce((acc, scr) => {
    return acc + scr.score;
  }, 0);
  let average = sum / dramas.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// should return a new array
function orderByYear(arr) {
  let ordered = arr.sort(function (a, b) {
    if (a.year - b.year !== 0) {
      return a.year - b.year;
    } else {
      return a.title > b.title ? 1 : -1;
    }
  });

  return ordered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// should return an array
// should not mutate the original array
// should only return the title of the movies, each value should be a string
// should return all of items when the array passed has fewer than 20 items
// If there are more than 20 elements, return only 20 of them.
// should order them alphabetically.
// should return the top 20 after ordering them alphabetically.
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
