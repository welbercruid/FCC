//-- usa el metodo test
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//-- Haz coincidir cadenas literales
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

//-- Coincide una cadena literal con diferentes posibilidades
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

//-- Ignora la capitalización al coincidir
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i = ignorecase
let result = fccRegex.test(myString);

//-- Extrae coincidencias
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

//-- Encuentra más que la primera coincidencia
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; //g = extraer o buscar más de un patron
let result = twinkleStar.match(starRegex);

//-- Haz coincidir cualquier cosa con el comodín punto
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // dot '.' coincide con cualquier caracter unico
let result = unRegex.test(exampleStr);

//-- Haz coincidir un solo carácter con múltiples posibilidades
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

//-- Haz coincidir las letras del alfabeto
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex);

//-- Haz coincidir los números y las letras del alfabeto
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex);

//-- Haz coincidir caracteres individuales no especificados
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // ^ = caracteres negados
let result = quoteSample.match(myRegex); 

//-- Haz coincidir caracteres que aparecen una o más veces
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // + para caracteres seguidos
let result = difficultSpelling.match(myRegex);

//-- Haz coincidir caracteres que aparecen cero o más veces
let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/; // * caracteres que aparecen cero o más veces
let result = chewieQuote.match(chewieRegex);

//-- Encuentra caracteres con una coincidencia perezosa
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // 
let result = text.match(myRegex);

//-- Encuentra uno o más criminales en una cacería
let reCriminals = /C+/;

//-- Haz coincidir patrones de cadena de inicio
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Fuera de un conj de caracteres, el caret es utilizado para buscar patrones al principio de las cadenas.
let result = calRegex.test(rickyAndCal);

//-- Haz coincidir patrones de cadena final
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // buscar al final de las cadenas usando el carácter '$' al final de la expresión regular.
let result = lastRegex.test(caboose);

//-- Coincide todas las letras y números
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // \w = [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;

//-- Haz coincidir todo menos letras y números
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // \W = [^A-Za-z0-9_]
let result = quoteSample.match(nonAlphabetRegex).length;

//-- Coincide con todos los números
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // \d = [0-9]
let result = movieName.match(numRegex).length;

//-- Coincide con todos los caracteres no numéricos
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // \D = [^0-9]
let result = movieName.match(noNumRegex).length;

//-- Restringe posibles nombres de usuario
let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d{2,}|[a-z]+\d*)$/i; 
let result = userCheck.test(username);

//-- Haz coincidir espacios en blanco
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // \s busca espacios en blanco
let result = sample.match(countWhiteSpace);

//-- Haz coincidir caracteres que no sean espacios en blanco
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // \S busca caracteres que no sean espacios en blanco
let result = sample.match(countNonWhiteSpace);

//-- specifica el menor y mayor número de coincidencias
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr);

//--Especifica solo el menor número de coincidencias
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr);

//-- Especifica el número exacto de coincidencias
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let result = timRegex.test(timStr);

//-- Comprueba todos o ninguno
let favWord = "favorite";
let favRegex = /favou?rite/; // ? especifica la posible existencia de un elemento
let result = favRegex.test(favWord);

//-- Lookahead positivo y negativo
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // 
let result = pwRegex.test(sampleWord);

//-- Comprueba agrupaciones mixtas de caracteres
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).* Roosevelt/gi; // Cambia esta línea
let result = myRegex.test(myString);

//-- Reutiliza patrones usando grupos de captura
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g;
let result = reRegex.test(repeatNum);
console.log(result);

//-- Usa grupos de captura para buscar y reemplazar
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea
let result = str.replace(fixRegex, replaceText);
console.log(result);

//-- Elimina espacio en blanco del inicio y final
let hello = "   Hello, World!  ";
let wsRegex = /^\s+ | \s+$/g; // Cambia esta línea
let result = hello.replace(wsRegex, ""); // Cambia esta línea
console.log(result);