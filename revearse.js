let name="Akash";
// let reverseName="";
// for(let i=name.length-1;i>=0;i--){
//     reverseName+=name[i]
// }
function reverseString(str){
    let reverseName='';
    for(let i=str.length-1;i>=0;i--){
        reverseName+=str[i]
    }
    return  reverseName;
}
function reverseString2(str){
    let nam=str;
    return nam.split("").reverse().join("")
}
let re=reverseString2("Anik")
console.log(re)
let reverseName=reverseString("Akash")
console.log(`The ${name} revarse is : ${reverseName}`);