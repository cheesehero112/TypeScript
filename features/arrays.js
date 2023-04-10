// How to type arrays
// type annotation is optional, but it's useful to put type, when we initialize an array as an empty array
var carMakers = ['ford', 'toyota', 'chevy'];
var emptyArray = [];
var dates = [new Date(), new Date()];
var cardsByMake = [['f150'], ['corolla'], ['camaro']];
// Help with inference when extracting values
var myCar = carMakers[0];
var yourCar = carMakers.pop();
// Prevent incompatible values
// carMakers.push(100); // => error
// Help with map
carMakers.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
var importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-1-10');
importantDates.push(new Date());
// importantDates.push(100); // => error
