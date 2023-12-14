//Function is said to be first-class if it can be treated as a variable

const printName = function(name){
    console.log("So, your name is "+ name)
}

printName("tawheed") //here we assigned a function to variable so it is called as first class funtion


const obj = {
    name : "tawheed",
    qualif : ()=>{
        console.log("I am currently doing my B-Tech from NIT Srinagar")
    }
}

obj.qualif()

const greet = () => {
    return "hello"
}

const greeting = (sayHi, name)=>{
    console.log(sayHi() +" "  + name)
}
//here we are also treating the function greet() as a variable so  we can call it first class function
greeting(greet , "tawheed")


function a(){
    return () => {
        console.log("hello this is functional programming")
    }
}

// const b = a()
// b()

a()() //these both are same and here function is also treated as a variable