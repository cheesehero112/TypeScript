// How to type arrays

// type annotation is optional, but it's useful to put type, when we initialize an array as an empty array
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const emptyArray: string[] = [];

const dates = [new Date(), new Date()];

const cardsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const myCar = carMakers[0];
const yourCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // => error

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-1-10');
importantDates.push(new Date());
// importantDates.push(100); // => error
