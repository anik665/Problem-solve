function findMidean(arr){
    arr.sort((a,b)=>a-b);
    let n=arr.length;
    if(n%2 === 1){
        return arr[Math.floor(n/2)];
    }
    else{
        let mid1 =arr[n/2 -1];
        let mid2 =arr[n/2];
        return (mid1 + mid2) /2
    }

}
let result = findMidean([1,2,3,4,5]);
console.log(result);