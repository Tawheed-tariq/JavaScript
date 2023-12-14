// "use strict"


sum(12,13)

function sum(a,b){
    add = a + b
/*  If "use strict" mode is not used then the output will be 
    the sum of two but as the use strict mode is used the 
    browser tells us that the add is not defined 
 */
    console.log(add);
}


/*
    List of feature (non-exhaustive)

    DIsallows global variables (catches missing var declerations an types in variable names)
    
    Silent failing assignments will throw error in strict mode(assigning NaN = 5;)
    
    Attempts to delete undeletable properties will throw(delete object.prototype)
    
    Requires all property names in object literal to be unique

    function parameter names must be unique

    forbids thw with keyword

    eval in strict mode does not introduce new variables
 */