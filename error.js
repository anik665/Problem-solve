function nam(a,b){
    try{
        if(b===0){
            throw new Error('Division by zero is not allowed')
        }
        return a/b;


    }catch(e){
        return e.message;
    }
}
console.log(nam(101,0));
console.log(nam(100,10));
const isprice=(price)=>{
    try{
        if(isNaN(price)){
            throw new Error('Price must be a number')
        }
        return price*2;
    } catch(e){
        return e.message;
    }
}
console.log(isprice(100));
console.log(isprice('abc'));