//promise produce
const promiseObj = new Promise(/*executor function*/ (resolve , reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5, 6];
        resolve(roll_no)
        reject('error occured')
    }, 2000);
});

const getBioData = (indexData) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexData) => {
            let bioData = {
                name : 'tawheed',
                age : 19
            }
            resolve(`The name of roll number ${indexData} is ${bioData.name} and age is ${bioData.age}`);
            reject('error occured in getting biodata');
        }, 2000, indexData);
    })
}

//promise consume
promiseObj.then((roll) => {
    console.log(roll);
    return getBioData(roll[2])
})
.then((data) => {
    console.log(data);
})
.catch((err)=> {
    console.log(err)
})


