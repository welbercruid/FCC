// 83 Construye objetos en JavaScript
const myDog = {
    name: "Firulai",
    legs: 4,
    tails: 1,
    friends: ["Chori", "Pancho"]
};

// 84 Accede a propiedades de objetos con notación de puntos
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
};
const hatValue = testObj.hat;   
const shirtValue = testObj.shirt;

// 85 Accede a propiedades de objetos con notación de corchete
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj["an entree"]; 
const drinkValue = testObj["the drink"];

// 86 Accede a propiedades de objetos con variables
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;  
const player = testObj[playerNumber]; 

// 87 Actualizando las propiedades de un objeto
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";

// 88 Añade nuevas propiedades a un objeto de JavaScript
const myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"]    
};
myDog.bark = "woof";

// 89 Elimina propiedades en un objeto de JavaScript
const myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof"
};
delete myDog.tails;

// 90 Usa objetos para hacer búsquedas
function phoneticLookup(val) {
let result = "";
  
const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
};  
result =  lookup[val];   
return result;
}
phoneticLookup("charlie");

// 91 Verifica las propiedades de un objeto
function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } return "Not Found";
}

// 92 Manipulando objectos complejos
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
];

// 93 Accede a objetos anidados
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
};
  
const gloveBoxContents = myStorage.car.inside["glove box"];

// 94 Accede a arreglos anidados
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
const secondTree = myPlants[1].list[1];

// 95 Colección de discos
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
};
  
  // Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
    if(prop !== "tracks" && value !== "") {
      records [id][prop] = value;
    } else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if(prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if(value === "") {
      delete records[id][prop];
    }  
    return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// 96 Itera con el bucle "while" de JavaScript
const myArray = [];
let i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
};

// 97 Itera con los bucles "for" de JavaScript
const myArray = [];
for(let i = 1; i < 6; i++) {
  myArray.push(i);
}

// 98 Itera números impares con un bucle "for"
const myArray = [];
for (let i = 1; i < 10; i+=2) {
  myArray.push(i);
}

// 99 Cuenta hacia atrás con un bucle "for"
const myArray = [];
for (let i = 9; i > 0; i-=2) {
  myArray.push(i);
}

// 100 Itera a través de un arreglo con un bucle "for"
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}

// 101 Anida bucles "for"
function multiplyAll(arr) {
let product = 1;
    
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
    }
}
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 102 Itera con el bucle "do...while" de JavaScript
const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while(i < 11);

// 103 Reemplaza bucles usando recursión
function sum(arr, n) {
if(n <= 0) {
    return 0;
} 
return sum(arr, n -1) + arr[n -1] ;
}

// 104 Búsqueda de perfiles
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];
  
function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
for(let i= 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
        if(contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        } else {
            return "No such property";
        }
    }
}
return "No such contact"
}
lookUpProfile("Akira", "likes");

// 105 Genera fracciones aleatorias con JavaScript
function randomFraction() {
    return Math.random();
}

// 106 Genera números enteros aleatorios con JavaScript
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// 107 Genera números enteros aleatorios dentro de un rango
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// 108 Utiliza la función "parseInt"
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56");

// 109 Utiliza la función "parseInt" con Radix (Base)
function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011");

// 110 Usa el operador condicional (ternario)
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}
    
checkEqual(1, 2);

// 111 Usa múltiples operadores condicionales (ternarios)
function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);

// 112 Utiliza recursión para crear una cuenta regresiva
function countdown(n){
    if(n < 1) {
        return [];
    } else {
        const countArr = countdown(n - 1);
        countArr.unshift(n);
        return countArr;
    }
}

// 113 Usa recursión para crear un rango de números
function rangeOfNumbers(startNum, endNum) {
    if(startNum === endNum) {
        return [endNum];
    } else {
        const arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum);
        return arr;
    }
};
//