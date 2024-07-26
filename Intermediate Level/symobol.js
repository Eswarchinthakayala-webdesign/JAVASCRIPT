// symbols==========

// comparing symbols

const mySymbol1=Symbol()
const mySymbol2=Symbol('mySymbol2')
console.log(mySymbol1==mySymbol2)

const obj={}
obj[mySymbol1]='symbol1'
obj[mySymbol2]='symbol2'
console.log(obj);


const symbol1=Symbol('name')
const symbol2=Symbol('name')

const person={}
person.age=19
person['gender']='male'
person['gender']='female'
person[symbol1]='alex'
person[symbol2]='john'
console.log(person);

// example
const exSymbol1=Symbol('foo')
console.log(typeof exSymbol1);
const emOBJ={
   firstName:"SubbaRao",
   lastName:'Seenu'
}
emOBJ[exSymbol1]='bar'
console.log(emOBJ);

for(let i in emOBJ)
{
   console.log(i);
}
