let sum=0;
function num(N){
    
    for(let i=0;i<N.length;i++){
        let rel=N[i];
        sum=sum+rel
        
    }
    return sum;
    
}
let result=num([4,5,6,7,8]);
console.log(result)