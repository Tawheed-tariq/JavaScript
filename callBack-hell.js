/*
    Callback Hell is essentially nested callbacks stacked below one another forming a 
    pyramid structure. Every callback depends/waits for the previous callback, thereby 
    making a pyramid structure that affects the readability and maintainability of the code.



Task
    1. after 2s get goll number
    2. after 2s get name and age of that roll number
    3. after 2s get gender of that roll number
*/

const getRoll = () => {
  setTimeout(() => {
    console.log("first callback");
    let roll_no = [1, 2, 3, 4, 5, 6];
    console.log(roll_no);
    setTimeout((roll) => {
        console.log("second callback");
        const bioData = {
        name: "tawheed",
        age: 19,
        };
        console.log(`The name for roll number ${roll} is ${bioData.name} and age is ${bioData.age}`);
        setTimeout(() => {
            bioData.gender = "male";
            console.log(`The name for roll number ${roll} is ${bioData.name} and age is ${bioData.age} and his gender is ${bioData.gender}`);
        }, 2000);
    },2000,roll_no[1]);
  }, 2000);
};
getRoll()