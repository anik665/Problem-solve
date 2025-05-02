const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const eventNumbers = numbers.filter((num) => num % 2 === 0);
console.log(eventNumbers);


/** Reduce methods */
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// Using reduce() to combine all array elements into a single value

console.log(sum)
// reduce() takes an accumulator and current value to return a final single result
// The second argument to reduce() is the initial value of the accumulator, which is 0 in this case.