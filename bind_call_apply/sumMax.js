function sumOfAll(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
    let max=Math.max(...arr);
    let min =Math.min(...arr);
    
    let maxSum =sum -min;
    let minSum =sum -max;
    return `${minSum} ${maxSum}`;
}
let result = sumOfAll([1,2,3,4,5])
console.log(result)