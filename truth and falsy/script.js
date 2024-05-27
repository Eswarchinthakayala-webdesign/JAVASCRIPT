//truth and falsy values

/* 5 falsy values in  javascript
1.0
2." "
3.undefined
4.null
5.NaN(not a number) */

console.log(Boolean(0)); //false
console.log(Boolean("jonas")); //true
console.log(Boolean(undefined));  //false
console.log(Boolean({}));  //true -empty object
console.log(Boolean(''));

//coercion 
const money=0;
if (money)
    {
        console.log("Dont't spend it all;")

    }
    else
    {
        console.log("you should get job")
    }

let height; // undefined
console.log(typeof let);
if(height)
    {
        console.log("it is defined");
    }    
    else
    {
        console.log("it is not defined");
    }

