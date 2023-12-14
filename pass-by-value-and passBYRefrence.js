//pass by value
let a = 10;
let b = a;
b = b+5;
console.log(a);
console.log(b);


//pass by refrence
const obj1 ={
    name: "tawheed",
    password: "exceptme"
}


const obj3 = obj1
obj3.name = "name changed"



function change_pass(obj2){
    obj2.password = "password changed"
}
change_pass(obj1)
console.log(obj1)

//as array is also an object the changes we do in arr2 will lead to changes in arr1
const arr1 = [1,2,3,4]
const arr2 = arr1

arr2.push(5)

console.log(arr1)
console.log(arr2)


//to only do changes in arr2 we use

const arr3 = [].concat(arr1)

arr3.push(6)
arr3.push(7)
console.log(arr3)