var a = 10;
function first(){
    var b = 10;
    second();
    function second(){
        var c = 30;
        console.log(a+b+c);
    }
}
first();