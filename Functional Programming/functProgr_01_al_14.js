//-- 01 Aprende sobre programación funcional
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);

//-- 02 Comprende la terminología de la programación funcional
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//-- 03 Comprende los peligros de usar el código imperativo
const Window = function(tabs) { //tabs es un array de títulos de cada sitio abierto dentro de la ventana
    this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
  };
  
  // Cuando unes dos ventanas en una
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // Cuando abres una nueva pestaña al final
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
    return this;
  };
  
  // Cuando cierras una pestaña
  Window.prototype.tabClose = function(index) {
  
    // Cambia solo el código debajo de esta línea  
    const tabsBeforeIndex = this.tabs.slice(0, index); // Obtiene las pestañas antes de la pestaña
    const tabsAfterIndex = this.tabs.slice(index + 1); // Obtiene las pestañas después de la pestaña  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos  
    // Cambia solo el código encima de esta línea
  
    return this;
   };
  
  // Vamos a crear tres ventanas del navegador
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento
  
  // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
  const finalTabs = socialWindow
    .tabOpen() // Abre una nueva pestaña para memes de gatos
    .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

//-- 04 Evita mutaciones y efectos secundarios utilizando programación funcional
let fixedValue = 4;

function incrementer() {  
    return fixedValue + 1;
}

//-- 05 Pasa argumentos para evitar la dependencia externa en una función
let fixedValue = 4;
function incrementer(n) {
    return n+1;
}

//-- 06 Refactoriza variables globales por fuera de funciones
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  return [...arr, bookName];
}
console.log(add(bookList, "otro libro"));

function remove(arr, bookName) {
  return arr.filter(book => book != bookName);
}
console.log(remove(bookList, 'The Hound of the Baskervilles'));

//-- 07 Usa el método "map" para extraer datos de un arreglo
const watchList = [
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
    }
];

const ratings = watchList.map(({Title: title, imdbRating: rating}) => ({title, rating}));
console.log(JSON.stringify(ratings));

//-- 08 Implementa map en un prototipo
Array.prototype.myMap = function(callback) {
    const newArray = [];
    this.forEach(a => newArray.push(callback(a)))
    return newArray;
};

//-- 09 Usa el método de "filter" para extraer datos de un arreglo
const watchList = [
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
  }
];
const filteredList = watchList
    .map(({Title: title, imdbRating: rating}) => ({title, rating}))
    .filter(({rating}) => rating > 8);

console.log(filteredList);

//-- 10 Implementa el método filter en un prototipo
Array.prototype.myFilter = function(callback) {
    const newArray = [];  
    this.forEach(a => {
        callback(a) && newArray.push(a);
    })
return newArray;
};

//-- 11 Devolver parte de un arreglo mediante el método slice
function sliceArray(anim, beginSlice, endSlice) {
    const newArr = anim.slice(beginSlice, endSlice);
    return newArr;
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//-- 12 Remueve elementos de un arreglo usando slice en lugar de splice
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//-- 13 Combina dos arreglos utilizando el método "concat"
function nonMutatingConcat(original, attach) {  
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//-- 14 Agrega elementos al final de un arreglo utilizando concat en lugar de push
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

//