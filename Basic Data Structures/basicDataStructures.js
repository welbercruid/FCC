//-- 01 Utiliza un arreglo para almacenar una colección de datos
let yourArray = ["palabra", 2022, true, null, undefined];

//-- 02 Accede a los contenidos de un arreglo utilizando la notación de corchetes
let myArray = ["a", "b", "c", "d"];
myArray[1] = "dinosaurio"
console.log(myArray);

//-- 03 Agrega elementos a un arreglo con push() y unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9 );
        return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

//-- 04 Elimina elementos de un arreglo con pop() y shift()
function popShift(arr) {
    let popped = arr.pop(); // Cambia esta línea
    let shifted = arr.shift(); // Cambia esta línea
    return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//-- 05 Elimina elementos usando splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);

//-- 06 Agrega elementos usando splice()
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon','BlanchedAlmond');
    return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//-- 07 Copia elementos de un arreglo usando slice()
function forecast(arr) {
    let newArr = arr.slice(2,4)
        return newArr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//-- 08 Copia un arreglo con el operador de propagación
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    newArr.push([...arr]);
      num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

//--09 Combina arreglos con el operador de propagación
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; 
    return sentence;
}
console.log(spreadOut());

//--10 Comprueba la presencia de un elemento con indexOf()
function quickCheck(arr, elem) {
    return arr.indexOf(elem) == -1 ? false : true;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//-- 11 Itera a través de todos los elementos de un arreglo utilizando bucles "for"
function filteredArray(arr, elem) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].indexOf(elem) == -1){
        newArr.push(arr[i]);
      }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//-- 12 Crea arreglos complejos multidimensionales
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['deep', 'concat', false, true, 'spread', 'array']
    ],
    [
      [
    ['deeper', 'mutate', 1327.98, 'splice', 'slice', 'push']
      ],
      [
        [
    ['deepest', 'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
        ]
      ]
    ]
];
console.log(myNestedArray[2][1][0][0][0]);

//-- 13 Agrega pares clave-valor a objetos de JavaScript
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
  
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

//-- 14 Modifica un objeto anidado dentro de un objeto
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};
userActivity.data.online = 45;
console.log(userActivity);

//-- 15 Accede a los nombres de propiedad con la notación de corchetes
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
  
function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("apples"));

//-- 16 Usa la palabra clave "delete" para eliminar las propiedades de los objetos
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
console.log(foods);

//-- 17 Evalúa si un objeto tiene una propiedad
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
function isEveryoneHere(userObj) {
    return ['Alan','Jeff', 'Sarah', 'Ryan'].every(names => userObj.hasOwnProperty(names));
}
console.log(isEveryoneHere(users)); 

//-- 18 Itera a través de las claves de un objeto con una sentencia "for...in"
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}
  
function countOnline(usersObj) {
let count= 0;
    for(let data in usersObj) {
      if(usersObj[data].online === true) {
        count++;
      }
    }
    return count;
}
console.log(countOnline(users));

//-- 19 Genera un arreglo de todas las claves de los objetos con Object.keys()
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(users));

//-- 20 Modifica un arreglo almacenado en un objeto
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
};
function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(user, 'Pete'));