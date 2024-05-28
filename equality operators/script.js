const age='18';

// == allowa type coercion
if(age==18) console.log("you become a adult(loose)");
if(age===18) 
    {console.log("you become a adult(strict)");}


const fav=Number(prompt("what is your name"));
console.log(fav);
console.log(typeof fav);

if (fav==23)
    {
        console.log("cool! 23 Is amazing");}
else if(fav==7){
        console.log("7 also a cool number!");
    }
else
{
    console.log("number is not 23 or 7");
}    

// loose different
/*  !== strict different */
if (fav!=23)
{
    console.log("why not 23!")
}
