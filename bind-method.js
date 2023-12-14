// const person1 = {
//     name : "tawheed",
//     age : 19,
//     sayHi : function(year, month){ //dont use arrow function to define a method
//         console.log(`Hello this is ${this.name} and my age is ${this.age} . It is crrently ${year} - ${month}`)
//     }
// }
// person1.sayHi(2021, "december")


// //The bind() method takes an object as an argument and creates a new function

// let fun = person1.sayHi.bind(person1)
// fun(2023, "january")



const person1 = {
    name : "tawheed",
    age : 19
}

const person2 = {
    name : "exceptme",
    age : 21
}

const person3 = {
    name : "tawheed taiq",
    age : 20
}


function sayHi(year, month){ 
    console.log(`Hello this is ${this.name} and my age is ${this.age} . It is crrently ${year} - ${month}`)
}

let fun = sayHi.bind(person2)
fun(2020, "march")