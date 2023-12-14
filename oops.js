class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    bioData(){ //instance method (can be inherited)
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
    static printName(){ //cannot be acessed by child classes
        console.log(this.name)
    }
}

class player extends student {
    constructor(name,age,game){
        super(name,age)
        this.game = game
    }
    play_biodata(){
        return super.bioData()
    }
}

let obj1 = new player('tawheed', 19, "chess")
obj1.bioData()
console.log(obj1.game)
obj1.play_biodata()
