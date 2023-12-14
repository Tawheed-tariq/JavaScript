const outerFun = (a) => {
    var b = 10
    const innerFun = () => {
        console.log(`the sum is ${a+b}`)
    }
    return innerFun
}

const inner  = outerFun(5)
console.dir(inner)
inner()