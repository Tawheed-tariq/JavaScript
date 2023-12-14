"use strict"
console.log(this) //gives window object or we can say global object

function sum(a,b){
    console.log("sum of two is " + a+b)
    console.log(this) //in use strict mode this will give undefined otherwise it gives window object
}
sum(12,34)

const obj ={
    name: "except_me",
    age: 19,
    show_age: function(){
        console.log("age is " + this.age)
        console.log(this) //this will give current object properties
        function check(){
            console.log(this)// this will also give undefined 
                            //because inside function this keyword gives undefined in strict mode
        }
        check()
    }
}
obj.show_age()