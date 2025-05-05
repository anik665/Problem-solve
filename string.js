function findRemoveStringIndex(str1, str2) {
    let result = [];
    for (let i = 0; i < str1.length; i++) {
        let new_str1 = str1.slice(0, i) + str1.slice(i + 1);
        if (new_str1 === str2) {
            result.push(i)
        }

    }
    return result;
}
console.log( findRemoveStringIndex("abdggge", "abdgge"))