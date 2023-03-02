// ==== Type annotation example ===== //

// Note: Even if I remove all of these types, it will still work because of Type inference.

//// number ////
let apples: number = 5;
// this is fine
apples = 10;
// this throws an error
apples = 'hi';

//// string ////
let speed: string = 'fast';

//// boolean ////
let hasName: boolean = true;

//// null ////
let nothingMuch: null = null;

//// undefined ////
let nothing: undefined = undefined;

//// built in objects ////
let now: Date = new Date();

//// array of strings ////
let colors: string[] = ['red', 'green', 'blue'];

//// array of numbers ////
let myNumbers: number[] = [1, 2, 3];

//// array of booleans ////
let truths: boolean[] = [true, false, true];

//// Classes ////
class Car {}
let car: Car = new Car();

//// Object literal ////
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
//// Function ////
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//// When to use annotations ////

// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // better way is to assign it to false, but this is an example to show a point.

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable who's type canot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // We can annotate and say the type can be boolean OR number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
