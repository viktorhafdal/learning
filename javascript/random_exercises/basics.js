let x; //Declaring variable
x = 0; //Assigning variable value.
x; //A variable evaluates to its value.

//NOTE: TYPES OF VALUES
//Javascript supports several types of values
x = 1;
x = 0.01;
x = "hello world";
x = 'javascript'
x = true;
x = false;
x = null;
x = undefined;

//NOTE: OBJECTS
//Javascript's most important type is the object.
//An object is a collection of name/value pairs, or a string to value map.
let book = { //Objects are enclosed with curlies
  topic: "JavaScript", //Properties are marked by key/values, topic has value "JavaScript"
  edition: 7
};

//Access the properties of an object with . or []
book.topic // => "JavaScript"
book["edition"] // => 7
book.author = "Flanagan" //Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.

//Conditionally access properties with ?. :
book.contents.ch01?.sect1 // => undefined: book.contents has no ch01 property.

//NOTE: ARRAYS
//JavaScript also supports arrays (numerically indexed lists) of values:
let primes = [2, 3, 5, 7]; //An array of 4 values.
primes[0] //First index of primes.
primes.length //Returns number of elements in array.
primes[primes.length-1] //Last index of primes.
primes[4] = 9; //Add new element by assignment.
primes[4] = 11; //Or alter an exisiting element.
let empty = []; //Is an empty array with no elements.
empty.length // => 0

//Arrays and object can hold other arrays and objects:
let points = [ //An array with 2 elements.
  {x: 0, y: 0}, //Each element is an object
  {x: 1, y: 1}
];
let data = { //An object with 2 properties
  trial1: [[1,2], [3,4]], //The value of each property is an array.
  trial2: [[2,3], [4,5]] //The elements of the arrays are arrays.
};

//NOTE: STRING 
cat = "half of 100 is ${100 / 2}" //Doing arithmetic operations inside of a string.

//NOTE: UNARY OPERATORS
console.log(typeof 4.5) // => number
console.log(typeof "x") // => string

//NOTE: AUTOMATIC TYPE CONVERSION
console.log(8 * null) // => 0
console.log("5"-1) // => 4
console.log("5" + 1) // => 51
console.log("five" * 2) // => NaN
console.log(false == 0) // => true
console.log(null == undefined) // => true
console.log(null == 0) // => false

//NOTE: SHORT-CIRCUITING OF LOGICAL OPERATORS

//The || operator will return the value to its left when that value can be converted to true
//and will return the value on its right otherwise. This has the expected effect when the
//values are Boolean and does something analogous for values of other types.
console.log(null || "user") // => user
console.log("Agnes" || "user") // => Agnes

//This can be useful in implementing a fallback value. For example, if you have a value that
//might be emoty, you can put || after it with a replacement value. If the initial value
//can be converted to false, you'll get the replacement instead.
//The rules for converting string and numbers to Boolean values state that 0, NaN and the
//empty string ("") count as false, while all the other values count as true.
console.log(0 || -1) // => -1
console.log("" || "!?") // => "!?"

//The ?? operator resembles || but returns the value on the right only if the value on
//the left is null or undefined, not if it is some other value that can be converted to false.
console.log(0 || 100); // => 100
console.log(0 ?? 100); // => 0
console.log(null ?? 100); // => 100
