function result(num) {
    switch (true) {
        case (num >= 90):
            return "A+"
            break;
        case (num >= 80):
            return "A "
            break;
        case (num >= 70):
            return "A- "
            break;
        case (num >= 60):
            return "B "
            break;
        case (num >= 50):
            return "C "
            break;
        case (num >= 40):
            return "D "
            break;
        default:
            return "F"
    }
}
let anik = result(90);
let Hasib=result(50)
console.log(`The Anik Grade is : ${anik}`)
console.log(`The Hasin Grade is :${Hasib}`)