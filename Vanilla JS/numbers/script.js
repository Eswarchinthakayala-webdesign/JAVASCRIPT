
function calcPrime()
{   
    const num=parseInt(document.getElementById('number').value)
    let count=0;
    
    if(num<0 || isNaN(num))
    {
        document.getElementById('ans').innerHTML=`<p style="color:red">Enter the Valid Number</p>`   
    }
    else if(num==1)
    {
        document.getElementById('ans').innerHTML=`<p style="color:yellow">1 is Neither Prime nor Composite</p>`   
    }
    
    else
    {
   
    for(let i=1;i<=num;i++)
    {
      if(num%i===0)
      {
        count++;
      }
    }
    if(count===2)
    {
        document.getElementById('ans').innerHTML=`<p style="color:green">It is Prime Number</p>`
    }
    else
    {
         document.getElementById('ans').innerHTML=`<p style="color:red">It is Not  Prime Number</p>`
    }
}
}

function displayPrime()
{
    const number=parseInt(document.getElementById('number').value)
    let primeNumbers=[]
    if(number<0 || isNaN(number))
        {
            document.getElementById('ans').innerHTML=`<p style="color:red">Enter the Valid Number</p>`   
        }
        else if(number==1)
        {
            document.getElementById('ans').innerHTML=`<p style="color:yellow">1 is Neither Prime nor Composite</p>`   
        }
    
        else{
  
    for(let i=1;i<=number;i++)
    {     let count=0
        for(let j=1;j<=i;j++)
        {  
            if(i%j==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            primeNumbers.push(i)
        }
    }
    document.getElementById('ans').innerHTML=`<p style="color:blue">Prime Numbers are ${primeNumbers.join(',')}</p>`
}}
