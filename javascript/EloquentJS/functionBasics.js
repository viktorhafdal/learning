//Functions are defined as such:
const funcName = function(parameter) { // we define a const with a name, and assign it as a function with 
                                       //optional parameter(s)
  return; // => undefined. Return the function - an empty return will return undefined
}

const makeNoise = function() { // we define a const name and assign it to a function
  console.log("PLing!"); // with a body
}

const roundTo = function(n, step) { // functions can also include parameters
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};


// BINDING AND SCOPES
// bindings declared with let and const are in fact local to the block in which they are declared
// so if created inside a loop, the code before and after cannot "see" this variable

let x = 10; // global
if (true) {
  let y = 20; // local to block
  let z = 30; // also global
}

// each scope can "look out" into the scope around it, so x is visible inside the block above.
// the exception is when multiple bindings have the same name - in that case, code can see only
// the innermost one. For example, when the code inside the halve function refers to n, it is
// seeing its own n, no the global n

const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100)); // => 50
console.log(n) // => 10


// NESTED SCOPE
// blocks and functions can be created inside other blocks and functions, producing multiple
// degrees of locality. for example:

const hummus = function(factor) { // factor known both inside of hummus and ingredient function
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor; // ingredientAmount not known outside of ingredient function
    if (ingredientAmount > 1) {
      unit += "s"; // unit not known outside of ingredient function
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  // etc
}

// the set of bindings visible inside a block is determined by the place of that block in the program text.
// each local scope can also see all the local scopes that contain it, and all scopes can see the global scope.
// this approach to binding is called LEXICAL scoping


// FUNCTIONS AS VALUES
