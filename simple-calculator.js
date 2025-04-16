function calculator(num1, num2) {

    let sum = num1 + num2;
    let diff = num1 - num2;
    let malt = num1 * num2;
    let div = num1 / num2;
    return { sum, diff, malt, div }

}
const { sum, diff, malt, div } = calculator(10, 5)
console.log(`The sum is : ${sum}`)
console.log(`The diff is :${diff}`)
console.log(`The malt is ${malt}`)
console.log(`The div is ${div}`)