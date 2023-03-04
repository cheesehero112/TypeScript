// What is Tuples & Why use them?

// In object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// I can make a type alias
type Drink = [string, boolean, number];

// In tuples
const pepsi: [string, boolean, number] = ['brown', true, 40];

// I can use type alias, which does the same exact thing as above
const coke: Drink = ['brown', true, 40];

const tea: Drink = ['brown', false, 0];

//==== We won't be using tuples often ====//
// Why?

// Tuples makes it difficult for us to understand what these numbers mean...
const carSpecs: [number, number] = [400, 3354];

// It's easier to understand with object
const carStats = {
  horsepower: 400,
  weight: 3354,
};
