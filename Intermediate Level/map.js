let numbers=[1,2,3,4,5,6]
let double=numbers.map(num=>
{
   return num*2;
}
)
console.log(double);

// Examples

let peoples=[
   {name:"John",age:20},
   {name:"Mike",age:30},
   {name:"Jane",age:25},
]

const result=peoples.map(person=>
{
   return [person.name,person.age];
}
)

console.log(result);
// Example

let array=[1,2,3,4,5,6,7];
let newArray=array.map(num=>num*10);
console.log(newArray);

function myFunction(num)
{
   return num*10;
}

let newArray2=array.map(myFunction);
console.log(newArray2);
