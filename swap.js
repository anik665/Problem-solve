function swap(a,b){
    let temp=a;
    a=b;
    b=temp;
    return [a,b];
}
const [a,b]=swap(5,10);
console.log(`The value of a is : ${a}`)
console.log(`The value of b is : ${b}`)
