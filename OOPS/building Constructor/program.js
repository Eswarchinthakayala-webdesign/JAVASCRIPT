function Person(firstName,lastName,dob)

{
    this.firstName=firstName
    this.lastName=lastName
    this.dob=new Date(dob)
    this.getFullName=function(){
        return `Name:${this.firstName} ${this.lastName}`
    }
    
}

let person1=new Person("Eswar","Chinthakayala","2-3-2005")
console.log(person1.firstName)
console.log(person1.lastName);
console.log(person1.dob.getFullYear());
