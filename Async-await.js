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
            resolve(bioData);
            reject('error occured in getting biodata');
        }, 2000, indexData);
    })
}

async function getData(){
    try{
        let roll = await promiseObj;
        console.log(roll);

        let studentData = await getBioData(roll[3]);
        console.log(studentData);
        return studentData.name;
    }catch(error){
        alert("error :" + error)
    }
}
getData().then((myName) => {
    console.log(myName);
});