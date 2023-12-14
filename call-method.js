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

person1.sayHi.call(person2, 2023, "january")