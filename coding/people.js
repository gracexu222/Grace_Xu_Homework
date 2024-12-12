// const people = [
//   { id: 1, name: "Alice", age: 30 },
//   { id: 2, name: "Bob", age: 25 },
//   { id: 3, name: "Charlie", age: 35 },
//   { id: 4, name: "Diana", age: 28 },
//   { id: 5, name: "Ethan", age: 22 },
// ];

// let updated_people = []; // Declare as let to allow reassignment

// updated_people = people.filter((filter) => filter.id !== 3);

// console.log(updated_people);

// Practice Problem :Traversing A
const nums = [10, 20, 30, 40, 50];
//loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
//forEach Method
nums.forEach(function (num) {
  console.log(num);
});
// using an arrow function
nums.forEach((num) => console.log(num));
// for..of loop
for (const num of nums) {
  console.log;
}
