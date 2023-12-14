const person1 = {
    name : "tawheed",
    age : 19,
    sayHi : function(year, month){ //dont use arrow function to define a method
        console.log(`Hello this is ${this.name} and my age is ${this.age} . It is crrently ${year} - ${month}`)
    }
}
person1.sayHi(2021, "december")
const person2 = {
    name : "exceptme",
    age : 18
}

person1.sayHi.apply(person2, [2023, "january"])

// let max = Math.max(1,32,43)
// console.log(max)

let max = Math.max.apply(null , [12,54,23,1,56,34])
console.log(max)