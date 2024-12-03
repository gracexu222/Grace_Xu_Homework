export function sum(a=0,b=0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid argument: both arguments must be numbers.');
  }
  // Return the sum of the two numbers
  return a + b;
  //return () => {};
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  return args.reduce((total, current) => {
    // Check if the current argument is a number
    if (typeof current !== 'number') {
      throw new Error('Invalid argument: all arguments must be numbers.');
    }
    return total + current;
  }, 0);
  //return () => {};
}
