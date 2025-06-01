// function findRemoveStringIndex(str1, str2) {
//     let result = [];
//     for (let i = 0; i < str1.length; i++) {
//         let new_str1 = str1.slice(0, i) + str1.slice(i + 1);
//         if (new_str1 === str2) {
//             result.push(i)
//         }

//     }
//     return result;
// }
// console.log( findRemoveStringIndex("abdggge", "abdgge"))


function findRemoveStringIndex(str1, str2) {
    let i = 0, j = 0;
    let result = [];
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        }
        else {
            result.push(i);
            i++;
        }
    }
    return result;
}
console.log(findRemoveStringIndex("abdggge", "abdgge"))