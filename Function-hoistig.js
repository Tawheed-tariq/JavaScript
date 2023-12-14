//In hoisting function declerations are moved on top before code execution 
//here function sum will be moved on top when code is executed and result will be printed


sum(12,13)

function sum(a,b){
    console.log(a+b);
}

//Exceptions in function hoisting
/*
    1. Here if function expression is used hoisting will not work.
    e.g; 
    sum(12,13)
    var sum = function (a,b){
        console.log(a+b)
    }
    this will give us error


    2. Also if function is placed in a seprate block or put in parenthesis, hoisting will not work
    e,g; 
    sum(12,13)
    (
        function sum(a, b){
            console.log(a+b)
        }
    )
    this will also give error

    3. If arrow function is used hoisting will not work.
 */