let mouseXStartPoint = 300; //starts from 300px
let mouseXEndPoint = window.innerWidth -300; //ends before 300px
let currXPos = 0
let fracXValue = 0
let mouseXRange = mouseXEndPoint - mouseXStartPoint;
let mouseYStartPoint = 0
let mouseYEndPoint = window.innerHeight
let currYPos = 0
let fracYValue = 0

const mouseMove = (event) => {
    currXPos = event.clientX - 300;
    currYPos = event.clientY ;
    fracYValue = currYPos/mouseYEndPoint;
    fracXValue = currXPos/mouseXRange;
    console.log(`x = ${fracXValue} y = ${fracYValue}`)
}

window.addEventListener("mousemove", mouseMove);