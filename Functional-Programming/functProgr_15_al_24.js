//-- 15 Utiliza el método "reduce" para analizar datos
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
];
  
function getRating(watchList) {
    let averageRating = watchList
      .filter(film => film.Director === "Christopher Nolan")
      .map(film => Number(film.imdbRating))
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) / watchList.filter(film => film.Director === "Christopher Nolan").length;
    return averageRating;
}
console.log(getRating(watchList));

//-- 16 Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo
const squareList = arr => {
    let newArr =  arr
    .filter((n) => n > 0 && n % 1 == 0)
    .map((n) => Math.pow(n, 2))
    return newArr;
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

//-- 17 Ordena un arreglo alfabéticamente con el método sort
function alphabeticalOrder(arr) {  
    return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//-- 18
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let x = [...arr].sort((a, b) => a - b);
    return x;
}
console.log(nonMutatingSort(globalArray));

//-- 19 Divide una cadena en un arreglo utilizando el método "split"
function splitify(str) {
    return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));

//-- 20 Combina un arreglo en una cadena utilizando el método "join"
function sentensify(str) {
   return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));

//-- 21 Aplicar programación funcional para convertir cadenas a slugs de URL
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));

//--22 Usa el método "every" para comprobar que cada elemento de un arreglo atienda un criterio
function checkPositive(arr) {
    return arr.every((n) => n > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));

//--23 Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio
function checkPositive(arr) {
    return arr.some((n) => n > 0);
}
checkPositive([1, 2, 3, -4, 5]);

//-- 24 Introducción a la currificación y a la aplicación de funciones parciales
function add(x) {
    return y => z => x + y + z;
}
add(10)(20)(30);

//