//---------- 51 Devuelve un valor de una función utilizando "Return"
function timesFive(n) {
    return n * 5;
}
console.log(timesFive(3));
 
//---------- 52 Ámbito global y funciones
let myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//---------- 53 Ámbito local y funciones
function myLocalScope() {
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
  
// myVar no está definida afuera de myLocalScope
console.log('outside myLocalScope', myVar);

//---------- 54 Ámbito global vs. local en funciones
const outerWear = "T-Shirt";

function myOutfit() {  
let outerWear = "sweater"
   return outerWear;
}

myOutfit();
//---------- 55 Comprendiendo el valor indefinido devuelto por una función
let sum = 0;

function addThree() {
  sum += 3;
}

function addFive() {
  sum += 5;
}

addThree();
addFive();

//---------- 56 Asignación con un valor devuelto
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
// Cambia solo el código debajo de esta línea
processed = processArg(7);

//--------- 57 Permanece en línea
function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
    arr.push(item);
    return arr.shift(item);
    // Cambia solo el código encima de esta línea
}
  
let testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//--------- 58 Comprende los valores booleanos
function welcomeToBooleans() {
    return true; // Cambia esta línea
}

//-------- 59 Usa lógica condicional con las sentencias "If"
function trueOrFalse(wasThatTrue) { 
    if (wasThatTrue) {
       return "Yes, that was true";
     }
       return "No, that was false";
}

//--------- 60 Comparación con el operador de igualdad
function testEqual(val) {
    if (val == 12) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

//-------- 61 Comparación con el operador de estricta igualdad
function testStrict(val) {
    if (val === 7) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

//--------- 62 Practica comparando diferentes valores
function compareEquality(a, b) {
    if (a === b) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");

//-------- 63 Comparación con el operador de desigualdad
function testNotEqual(val) {
    if (val != 99) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

//--------- 64 Comparación con el operador de estricta desigualdad
function testStrictNotEqual(val) {
    if (val !== 17) { // Cambia esta línea
      return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10); 

//--------- 65 Comparación con el operador "mayor que"
function testGreaterThan(val) {
    if (val > 100) {  // Cambia esta línea
      return "Over 100";
    }
    if (val > 10) {  // Cambia esta línea
      return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(10);

//-------- 66 Comparación con el operador "mayor o igual que"
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Cambia esta línea
      return "20 or Over";
    }
    if (val >= 10) {  // Cambia esta línea
      return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);
 //--------- 67 Comparación con el operador "menor que"
 function testLessThan(val) {
    if (val < 25) {  // Cambia esta línea
      return "Under 25";
    }
    if (val < 55) {  // Cambia esta línea
      return "Under 55";
    }
    return "55 or Over";
}
testLessThan(10);

//-------- 68 Comparación con el operador "menor o igual que"
function testLessOrEqual(val) {
    if (val <= 12) {  // Cambia esta línea
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Cambia esta línea
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

//-------- 69 Comparaciones con el operador lógico "and"
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

//-------- 70 Comparaciones con el operador lógico "or"
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

//--------- 71 Introducción a las sentencias "Else"
function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    return result;
}
testElse(4);

// ------- 72 Introducción a las sentencias "Else If"
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {  
    return "Between 5 and 10";
}
}
testElseIf(7);

//-------- 73 Orden lógico de las sentencias "if else"
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

//-------- 74 Encadena sentencias if else
function testSize(num) {
    if (num < 5) {
      return "Tiny";
    } else if(num < 10 ) {
      return "Small";
    } else if(num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else if(num >= 20) {
      return "Huge";
    } else {
      return "Change Me";
    }
}
testSize(7);

//-------- 75 Código de golf
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par -2) {
        return names[1];
    } else if (strokes == par -1) {
        return names[2];
    } else if (strokes == par) {
        return names[3]; 
    } else if (strokes == par +1) {
        return names[4]; 
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6]; 
    } else {
        return "Change Me";
    }
}
golfScore(5, 4);

//-------- 76 Seleccionando entre muchas opciones con declaración switch
function caseInSwitch(val) {
let answer = "";
    
switch (val){
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
}
    return answer;
}
caseInSwitch(1);

//-------- 77 Agrega una opción predeterminada en las declaraciones switch
function switchOfStuff(val) {
let answer = "";
   
switch (val) {
    case "a":
        answer = "apple";
        break;
    case "b":
        answer = "bird";
        break;
    case "c":
        answer = "cat";
        break;
    default:
        answer = "stuff";
        break;
    }
    return answer;
}
switchOfStuff(1);

//-------- 78 Múltiples opciones idénticas en las declaraciones "switch"
function sequentialSizes(val) {
let answer = "";

switch (val) {
    case 1:
    case 2:
    case 3:
        answer = "Low";
        break;
    case 4:
    case 5:
    case 6:
        answer = "Mid";
        break;
    case 7:
    case 8:
    case 9:
        answer = "High";
    }  
    return answer;
}
sequentialSizes(1);

//-------- 79 Reemplazando cadenas de "If Else" por "Switch"
function chainToSwitch(val) {
let answer = "";
switch(val) {
    case  "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
    }
    return answer;
}
chainToSwitch(7);

//------- 80 Devuelve valores booleanos desde funciones
function isLess(a, b) {
    return a < b;
}  
isLess(10, 15);

//-------81 Patrón de devolución anticipado para funciones
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);