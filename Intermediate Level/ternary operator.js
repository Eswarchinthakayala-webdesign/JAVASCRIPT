// Ternary operators

const a=10;
const b=20;

console.log(a>b?console.log("a is greater"):("b is greater"));

// Example 2

let password="Eripukka";
function passwordCheck(ps)
{
    // if(ps.length===8)
    // {
    //     console.log("Password strong");
    // }
    // else{
    //     console.log("It must contain 8 character")
    // }
    return (ps.length===8?"Strong Password":"It  must contain 8 characters");
}

const res=passwordCheck(password);
console.log(res);
