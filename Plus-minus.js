function arr(nums){
let pos=0;
let neg=0;
let zero=0;
let s=nums.length;
for(let i=0;i<nums.length;i++){
    if(nums[i]>0) pos++;
    else if(nums[i]<0) neg++;
    else zero++;   
}
console.log((pos/s).toFixed(6));
console.log((neg/s).toFixed(6));
console.log((zero/s).toFixed(6));
}