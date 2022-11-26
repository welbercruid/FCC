//01 Comenta tu código de JavaScript
//comentario de una línea
console.log("Comentario de una línea y multilínea.");
/* Este es un com
comentario multilínea */

//02 Declara variables de JavaScript
var myName;

//03 Almacenar valores con el operador de asignación
var a;
a = 7;

//04 Asigna el valor de una variable a otra variable
var a;
a = 7;
var b;
b = a;

//05 Inicializa variables con el operador de asignación
var a = 9;

//06 Declara variables de cadena
var myFirstName = "Pepe";
var myLastName = "Lui";

//07 Comprendiendo las variables no inicializadas
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//08 Comprendiendo la sensibilidad de mayúsculas en las variables
// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//09 Explora las diferencias entre las palabras claves var y let
let catName = "Oliver";
let catSound = "Meow!";

//10 Declara una variable de solo lectura con la palabra clave const
const FCC = "freeCodeCamp"; // Cambia esta línea
let fact = "is cool!"; // Cambia esta línea
fact = "is awesome!";
console.log(FCC, fact); // Cambia esta línea

//11 Suma dos números con JavaScript
const sum = 10 + 10;

//12 Resta un número de otro con JavaScript
const difference = 45 - 33;

//13 Multiplica dos números con JavaScript
const product = 8 * 10;

//14 Divide un número entre otro con JavaScript
const quotient = 66 / 33;

//15 Incrementa un número con JavaScript
let myVar = 87;
myVar++;

//16 Decrementa un número con JavaScript
let myVar = 11;
myVar--;

//17 Crea números decimales con JavaScript
const myDecimal = 5.7;

//18 Multiplica dos números decimales con JavaScript
const product = 2.0 * 2.5;

//19 Divide un decimal entre otro con JavaScript
const quotient = 4.4 / 2.0; // Cambia esta línea

//20 Encuentra un resto en JavaScript
const remainder = 10 % 8;

//21 Asignación compuesta con adición aumentada
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

//22 Asignación compuesta con resta aumentada
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

//23 Asignación compuesta con multiplicación aumentada
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

//24 Asignación compuesta con división aumentada
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

//25 Escapa comillas literales en cadenas
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Cambia esta línea

//26 Cita cadenas con comillas simples
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//27 Escapa secuencias en cadenas
var myStr = 'FirstLine\n\t\\SecondLine\n\ThirdLine' // Cambia esta línea

//28 Concatena cadenas con el operador "más"
const myStr = "This is the start. " + "This is the end."; // Cambia esta línea

//29 Concatena cadenas con el operador "más igual"
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//30 Construye cadenas con variables
var myName = "Ivan";
var myStr = "My name is " + myName + " and I am well!";

//31 Agrega variables a cadenas
var someAdjective = "beautyfull!";
var myStr = "Learning to code is ";
myStr += someAdjective;

//32 Encuentra la longitud de una cadena
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

//33 Utiliza la notación de corchetes para encontrar el primer carácter en una cadena
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // Cambia esta línea

//34 Comprende la inmutabilidad de las cadenas
var myStr = "Jello World";
myStr = "Hello World"; // Cambia esta línea

//35 Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; // Cambia esta línea

//36 Utiliza la notación de corchetes para encontrar el último carácter en una cadena
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1]; // Cambia esta línea

//37 Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Cambia esta línea

//38 Palabra en blanco
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Cambia esta línea

//39 Almacena múltiples valores en una variable utilizando los arreglos de JavaScript
const myArray = ["elemento", 2];

//40 Anida un arreglo dentro de otro arreglo
const myArray = [["Bulls", 23], ["White Sox", 45]];

//41 Accede a los datos de un arreglo con índices
const myArray = [50, 60, 70];
const myData = myArray[0];

//42 Modifica los datos de un arreglo con índices
const myArray = [18, 64, 99];
myArray[0] = 45;

//43 Accede a arreglos multidimensionales con índices
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

//44 Manipula arreglos con push()
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

//45 Manipula arreglos con pop()
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop(1);

//46 Manipula arreglos con shift()
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift()

//47 Manipula arreglos con unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//48 Lista de compras
const myList = [["Beer", 15], ["Pizza", 4], ["Chocolate Bar", 15], ["Chocolate cake", 2], ["Fruts", 10]];

//49 Escribe JavaScript reutilizable utilizando funciones
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

//50 Pasa valores a las funciones utilizando argumentos
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  functionWithArgs(3, 5);