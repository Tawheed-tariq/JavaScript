/*
    The fetch api produces a fetch() method defined on window object which you can 
    use to perform requests.

    This method returns a promise that you can use to retrive a response of a request.
*/

/*

AJAX call fetch api
    fetch(api)
    .then((apiData)=> {
        console.log(apiData)
        return apiData.json()
    })
    .then((jsonData) => {
        console.log(jsonData)
    })
    .catch((error) => {
        console.log(error)
    })

async function getData(){
    cosnt data = await fetch(api)
}

 */