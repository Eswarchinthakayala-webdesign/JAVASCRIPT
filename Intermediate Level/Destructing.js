// Destructing 

const array=['one','two','three'];

const[one]=array;

console.log(one); // two

// Example-2

let a,b;
[a=10,b=12]=["one"]
console.log(a,b)

// Example-3

function f()
{
    return [1,2,4];

}

let n,m,o;
[n,m,o]=f();

console.log(n,m,o);
