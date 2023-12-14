const sum = (...inputs) => {
    let res = 0
    inputs.forEach(item => {
        res += item
    })
    console.log(res)
}
sum(1,2,3,4)
sum(5,6)
sum(3,7,3)

function fun(a, b , ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

fun("tt", 'aa', 'ww', 'hh', 'ee' , 'dd')



//spread operator
arr = [1,2,3,4,5,6]
fun(...arr)