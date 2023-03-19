//-- 01 Convierte Celsius a Fahrenheit
function convertToF(celsius) {
let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}
convertToF(30);
    
//-- 02 Invierte una cadena
function reverseString(str) {
    return str.split("").reverse().join("");
}  
reverseString("hello");
    
//-- 03 Factoriza un número
function factorialize(num) {
    if(num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}
factorialize(5);
    
//-- 04 Encuentra la palabra más larga en una cadena
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(words => words.length));
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
    
//-- 05 Devuelve los números mayores en los arreglos
function largestOfFour(arr) {
    return arr.map((a) => Math.max(...a));
}  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    
//-- 06 Confirma el final
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
    
//-- 07 Repite una cadena repite una cadena
function repeatStringNumTimes(str, num) {
    if(num < 1) {
        return "";
    }
    return new Array(num + 1).join(str);
}
repeatStringNumTimes("abc", 3);
    
//-- 08 Recorta una cadena
function truncateString(str, num) {
    if(str.length > num) {
        return str.slice(0, num) + "...";
    }
    return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
    
//-- 09 Buscadores guardianes
function findElement(arr, func) {
    return arr.find(func);
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
    
//-- 10 Boo who (Booleano Quién)
function booWho(bool) {
    return typeof bool === "boolean";
}
booWho(null);
    
//-- 11 Haz que la primera letra de una palabra este en mayúscula
function titleCase(str) {
    let convertToArray = str.toLowerCase().split(" ");
    let result = convertToArray.map((val) =>
        val.replace(val.charAt(0), val.charAt(0).toUpperCase()));
    return result.join(" ");
}
titleCase("I'm a little tea pot");
    
//-- 12 Cortar y rebanar
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);
        return newArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
    
//-- 13 Rebote falsy
function bouncer(arr) {
    return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);
    
//-- 14 Dónde pertenezco
function getIndexToIns(arr, num) {
    arr.push(num);
        return arr.sort((a, b) => a - b).indexOf(num);
}
getIndexToIns([40, 60], 50);
    
//-- 15 Mutaciones
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every((letra) => arr[0].toLowerCase().indexOf(letra) != -1);
}
mutation(["hello", "hey"]);
    
//-- 16 Monito Trocitos
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while(arr.length > 0) {
          newArr.push(arr.splice(0, size))
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//