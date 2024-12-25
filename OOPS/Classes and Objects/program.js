
//classes
class Person
{   //properties
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }

    //method
    introduce()
    {
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}

//objects
let person1=new Person("Eswar",20)
person1.introduce()
