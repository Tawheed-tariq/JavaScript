const interviewQuestions = (name)=>{
    return function(topic){
        if(name === "tawheed"){
            console.log(`hello ${name}. Tell us what you know about ${topic}`)
        }else if(name === 'exceptme'){
            console.log(`hello ${name}. Tell us what you know about ${topic}`)
        }else{
            console.log("welcome to our company " + name);
        }
    }
}

interviewQuestions("tawheed")("reactjs")
interviewQuestions("exceptme")("javascript")
interviewQuestions("tawheed tariq")("UI")