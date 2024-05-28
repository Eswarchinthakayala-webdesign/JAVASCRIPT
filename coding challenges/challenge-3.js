// Coding Challenge-3

  


//Test 2
const dolphinScore=(97+112+101)/3;
const koalasScore=(109+95+123)/3;
console.log(dolphinScore.toFixed(2),koalasScore.toFixed(2));

//Test 1
if(dolphinScore>koalasScore && dolphinScore>=100)
    {
   console.log(`dolphin's(${dolphinScore.toFixed(2)}) are Winners`);
           }
else if(koalasScore>dolphinScore && koalasScore>=100)
{
    console.log(`koalas's(${koalasScore.toFixed(2)}) are Winners`);
}                
else if(koalasScore===dolphinScore && koalasScore>=100 &&dolphinScore>=100)
    {
        console.log("Match Draw");
    }  
else
{
    console.log("no one win the match")
}    

