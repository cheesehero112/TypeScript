// How to annotate functions

const add = (a: number, b: number): number => {
  return a + b;
};
const subtract = (a: number, b: number): number => {
  return a - b;
};

// How to annotate a function
function divide(a: number, b: number): number {
  return a / b;
}

// How to annotate annoymous function expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

// What to do if it doesn't return anything
const logger = (message: string): void => {
  console.log(message);
};

// Rare case if nothing will be returned because it will not reach to the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
};

// More common way is to do this => check if message doesn't exist, if not return nothing
const throwErrorVoid = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// How to destructure => destructure and annotations are done separately
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
