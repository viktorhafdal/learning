//NOTE: LOOPING A TRIANGLE
let triangle = "";

for (let i = 0; triangle.length <= 10; i++) {
  console.log(triangle += "#");
}


//NOTE: FIZZBUZZ
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


//NOTE: CHESSBOARD
let size = 7;

for (let i = 0; i < size; i++) {
  let line = "";

  if (i % 2 == 0) {
    for (let j = 0; j < size/2; j++) {
      line += "# "
    }
    if (size % 2 == 1) {
      line = line.substring(0, line.length-1);
    }
    console.log(line);

  } else {
    for (let j = 0; j < size/2; j++) {
      line += " #"
    }
    if (size % 2 == 1) {
      line = line.substring(0, line.length-1);
    }
    console.log(line);
  }
}
