// 01 Compara el alcance de las palabras clave "var" y "let"
function checkScope() {
    let i = 'function scope';
    if(true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
console.log(checkScope());

// 02 Muta un arreglo declarado con const
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}

// 03 Prevenir la mutación del objeto
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 04 Usa funciones flecha para escribir funciones anónimas de manera breve
const magic = () => new Date();

// 05 Escribe funciones flecha con parámetros
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

// 06 Establece parámetros por defecto para tus funciones
const increment = (number, value = 1) => number + value;

// 07 Utiliza el parámetro rest con parámetros de función
const sum = (... args) => {  
    return args.reduce((a, b) => a + b, 0);
}

// 08 Utiliza el operador de propagación para evaluar los arreglos en el lugar
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Cambia esta línea
console.log(arr2);

// 09 Usa sintaxis de desestructuración para extraer valores de objetos
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}; 
const {today, tomorrow} = HIGH_TEMPERATURES;

// 10 Usa sintaxis de desestructuración para asignar variables desde objetos
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// 11 Usa sintaxis de desestructuración para asignar variables desde objetos anidados
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// 12 Usa sintaxis de desestructuración para asignar variables desde arreglos
let a = 8, b = 6;
[a, b] = [b, a];

// 13 Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list; // Cambia esta línea
    return shorterList;
}  
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// 14 Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0;

//15 Crea cadenas usando plantillas literales
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    const failureItems = [];
    
    for(var x in arr) {
      failureItems.push(`<li class="text-warning">${arr[x]}</li>`)
    }
    return failureItems;
}
const failuresList = makeList(result.failure);

// 16 Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto
const createPerson = (name, age, gender) => ({name,age,gender});

// 17 scribe funciones breves y declarativas con ES6
const bicycle = {
    gear: 2,
    setGear (newGear) {
      this.gear = newGear;
    }
};
  
bicycle.setGear(3);
console.log(bicycle.gear);

// 18 Usa sintaxis de clases para definir una función constructora
class Vegetable {
    constructor(name) {
      this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'

// 19 Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
  
    get temperature () {
      return (5/9) * (this.fahrenheit - 32);
    }
  
    set temperature (celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius

// 20 Crea un módulo para scripts
<html>
  <body>
<script type="module" src="index.js"></script>
  </body>
</html>

// 21 Utiliza la exportación para compartir un bloque de código
const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
export {uppercaseString, lowercaseString};

// 22 Reutiliza código de JavaScript utilizando import
import {uppercaseString, lowercaseString} from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// 23 Use * para importar todo de un archivo
import * as stringFunctions from './string_functions.js';

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// 24 Crear un fallback de exportación con export default
export default function subtract(x, y) {
    return x - y;
}

