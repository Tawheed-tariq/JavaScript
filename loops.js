arr = [10, 20, 30, 40, 50]

obj = {
    name : "tawheed",
    age : 19,
    education : "B-Tech (current)"
}

//used to loop through array
arr.forEach((item , index) => {
        console.log(index + "--" + item)
}); 


//for/of loop used to loop through iterables
for(x of arr){
    console.log(x)
}


//for/in loop used to loop through objects or we can say enumerables
for(prop in obj){
    console.log(prop + "--" + obj[prop])
}