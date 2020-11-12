class Persion{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('my name is '+this.name)
    }
}

const a = new Persion('aa',11)
a.greet()