/* syntax for if-else
if()
    {

    }
    else
    {

    }

*/

const age=14;
const isOldEnough=age>=18;
if(isOldEnough)
    {
        console.log("sarah is enough to start the driving lincense 😍");
    }
else{

    const year =18-age;
    console.log(`sarah is too young.wait another ${year} years`);
}  



const birthYear=1991;
let century;
if (birthYear<=2000)
    {
         century=20;
    }
    else
    {
         century=21;
    }
console.log(century); 
