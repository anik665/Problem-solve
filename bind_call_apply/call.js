const person1 ={
    name:'anik',
    introduce:function(city){
        console.log(`Hello my name is ${this.name} and I live in ${city}`)
    }
}
const persone2={
    name:'siam'
}
// call method

person1.introduce.call(persone2,"Dhaka")