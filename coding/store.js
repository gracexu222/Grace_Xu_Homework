// Practice Problem 1:Traversing Arrays

//import { name } from "ci-info";

const nums = [10, 20, 30, 40, 50];
// for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
//forEach method
nums.forEach(function (num) {
  console.log(num);
});
// arrow function
nums.forEach((num) => console.log(num));
//for... of Loop
for (const num of nums) {
  console.log(num);
}

// Practice Problem 2: Using Array.prototype.map
const nums2 = [1, 2, 3, 4, 5];
//const squares = nums2.map((x) => x * x);
//console.log(squares);
// explicit function
// const squares = nums2.map(function (x) {
//   return x * x;
// });
const squares = nums2.map((x) => Math.pow(x, 2));

// Practice Problem 3: Array Destructuring
const colors = ["red", "green", "blue"];
// Task use array destructuring to extract the first
//two colors into variables first color and secondColor.
// print both variables.
const [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

//Practice Problem 4: Object Destructuring

// const person = { name: "Alice", age: 30, city: "New York" };

// // const { name, age } = person;
// // // is equivalent to
// // // const a = obj.a;
// // // const b = obj.b;
// // console.log(name);
// // console.log(age);
// const { name: fullName, age: yearsOld } = person;

// console.log(fullName); // Outputs: Alice
// console.log(yearsOld); // Outputs: 30
