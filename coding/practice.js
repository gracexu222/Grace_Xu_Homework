// loop
const numbers = [10, 20, 30, 40, 50];

// for loop
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// // num of numbers will print the array and in numbers will print index.
// for (let i of numbers) {
//   console.log(i);
// }
//  forEach Method
// numbers.forEach((i) => {
//   console.log(i);
// });

// numbers.forEach(function (i) {
//   console.log(i);
// });

// const squares = numbers.map((i) => i * i);
// console.log(squares);

const squares = numbers.map((i) => Math.pow(i, 2));
console.log(squares);
