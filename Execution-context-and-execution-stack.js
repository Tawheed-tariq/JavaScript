//This is to show how execution stack works in javascript

function a(){
    console.log("this is functon a");
    b();
    console.log("function b executed successfully and returns to function a");
}
function b(){
    console.log("this is function b");
    c();
    console.log("function c executed successfully and returns to function b");
}
function c(){
    console.log("we are in function c right now");
}
a();