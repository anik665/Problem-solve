const isVowel = (char) => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowel.includes(char.toLowerCase())

}
const numberOFVowel = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            count++
        }
    }
    return count;
}
let name=numberOFVowel('Akashe')
console.log(name)
