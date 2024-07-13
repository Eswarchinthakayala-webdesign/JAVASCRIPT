
// Spread operators
function giveMe4(a,b,c,d)
{
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);
}
 const color=['red','blue','green','yellow']

giveMe4(...color);


// Example -2

// using arrays
const strNums=['one','two','three'];
const moreStrNums=['four','five','six']

const concat=[...strNums,...moreStrNums];

console.log(concat)

let peoples=['eswar','sriram','vamsi'];
const allPeoples=['raju',...peoples,'rajesh'];

console.log(allPeoples.length)
console.log(allPeoples)

// using objects

const obj1=
{
    x:1,
    y:2
}

const obj2=
{
    z:3
}

const obj3={
    ...obj1,...obj2
}

console.log(obj3)

// Example-3

let person=
{
    name:'eswar',
    age:25,
    gender:"male"
}

const clone={...person,work:"developer"}
console.log(clone)
