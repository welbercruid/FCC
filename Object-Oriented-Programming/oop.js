//--Crea un objeto básico de JavaScript
let dog = {
    name: "Terere",
    numLegs: 4
};

//-- Utiliza notación de puntos para acceder a las propiedades de un objeto
let dog = {
    name: "Spot",
    numLegs: 4
};
console.log(dog.name, dog.numLegs);

//-- Crea un método en un objeto
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => {
      return `This dog has ${dog.numLegs} legs.`
    }
};
dog.sayLegs();

//-- Haz el código más reutilizable con la palabra clave "this"
let dog = {
    name: "Spot",
    numLegs: 4,  
    sayLegs: function() {
        return `This dog has ${this.numLegs} legs.`
    }
};
dog.sayLegs();

//-- Define una función "Constructor"
function Dog() {
    this.name = "Brownie";
    this.color ="brown";
    this.numLegs = 4
}

//-- Utiliza un constructor para crear objetos
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
let hound = new Dog();

//-- Extender constructores para recibir argumentos
class Dog {
    constructor(name, color) {
      this.name = name;
      this.color = color;
      this.numLegs = 4
    }
}
let terrier = new Dog("Pepe", "brown");

//-- Verifica el constructor de un objeto con "instanceof"
class House {
    constructor(numBedrooms) {
        this.numBedrooms = numBedrooms;
    }
}
let myHouse = new House(3);
myHouse instanceof House;

//-- Comprender las propiedades directas(se definen en la propia instancia del objeto)
function Bird(name) {
    this.name = name;
    this.numLegs = 2; //own property
}
  
let canary = new Bird("Tweety");
let ownProps = [];

for(let prop in canary) {
    if(canary.hasOwnProperty(prop)) {
      ownProps.push(prop);
    }
}
console.log(ownProps);

//--Utiliza propiedades "prototype" para reducir código duplicado
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4; // prototype property

//-- Itera sobre todas las propiedades
function Dog(name) {
    this.name = name;
}
  
Dog.prototype.numLegs = 4;
  
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
  
for(let prop in beagle) {
    if(beagle.hasOwnProperty(prop)) {
      ownProps.push(prop);
    } else {
      prototypeProps.push(prop)
    }
}
console.log(ownProps);
console.log(prototypeProps);

//--Entiende la propiedad constructor
function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog; //al ser boleano retorna true o false
}

//--Cambia el prototipo a un nuevo objeto
function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    numLegs: 4,
    eat: function() {
    console.log("nom nom nom");
    },
    describe: function() {
    console.log(`My name is ${this.name}`);
    }
}; 

//--Recuerda establecer la propiedad "constructor" al cambiar el prototipo
function Dog(name) {
    this.name = name;
  }
  
// Cambia solo el código debajo de esta línea
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log(`My name is ${this.name}`);
    }
};
//--Entendiendo de dónde viene el prototipo de un objeto
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

//--Comprende la cadena "prototype"
function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // produce true
Object.prototype.isPrototypeOf(Dog.prototype);

//--Usa herencia para que no te repitas
function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat
};
  
function Bear(name) {
    this.name = name;
}
Bear.prototype = {
    constructor: Bear
};
  
function Animal() { }
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};

//--Hereda comportamientos de un supertipo (supertype)
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 

//--Establece el prototipo de hijo para una instancia del padre
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

//--Restablece una propiedad "constructor" heredada
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
let duck = new Bird();

Dog.prototype.constructor = Dog;
let beagle = new Dog();

//--Añade métodos después de la herencia
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!")
}
let beagle = new Dog();

//--Sobrescribir métodos heredados
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
}

let penguin = new Penguin();
console.log(penguin.fly());//Alas, this is a flightless bird.

//--Utiliza un "mixin" para añadir un comportamiento común entre objetos no relacionados
let bird = {
    name: "Donald",
    numLegs: 2
};
  
let boat = {
    name: "Warrior",
    type: "race-boat"
};

let glideMixin = function(obj) {
    obj.glide = function() { }
}
glideMixin(bird);
glideMixin(boat);

//--Utiliza closures p/ evitar que las prop's de un objeto se puedan modificar desde fuera
//closure = una función siempre tiene acceso al contexto en el que se creó
function Bird() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    };
}

//--Comprende las funciones (anonimas) que son invocadas inmediatamente (IIFE)
(function () {
    console.log("A cozy nest is ready");
  })();

//--Utiliza una IIFE para crear un módulo
let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();
//