// function palendrom(str){
//     let revarse='';
//     let nam=str;
//     for(let i=nam.length-1;i>=0;i--){
//         revarse +=nam[i];
//     }
//     if(nam==revarse){
//         console.log("That is palendrom")
//     }
//     else {
//         console.log("That is not palendrom")
//     }
// }
// palendrom('rivir') 
/**Use arrow functon  */
/** 
const palindrom=(str)=>{
    let cliend=str.toLowerCase().replace(/[^a-z0-9]/g);
    let revarse=cliend.split("").reverse().join("");
    return cliend===revarse ?`the ${str} is Palindrom`:`The ${str} is not palindrom`;
}
let first = palindrom('madam');
let second=palindrom('hello')
console.log(first,second) 
*/
function palindrom(str){
    let cliend=str.toLowerCase().replace(/[^a-z0-9]/g);
    let revarse=cliend.split("").reverse().join('');
    if(cliend===revarse){
        return `The ${str} is palindrom`;
    }
    else {
        return `The ${str} is not palindrom`
    }
}
let first = palindrom('madam');
console.log(first)