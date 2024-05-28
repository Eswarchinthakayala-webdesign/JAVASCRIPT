const day=prompt("enter the day");
console.log("day=",day);

switch(day)
{
    case 'monday':
        console.log("plan for course");
        break;
    case 'tuesday':
        console.log("plan for videos");
        break;    
    case 'wednesday':
    case 'thursday':    
        console.log("write code examples");
        break;
    case 'friday':
        console.log("record Videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy Weekend!");              

}

if (day==='monday')
    {
        console.log("plan for course");
    }
else if (day==='tuesday')    
    {
        console.log("plan for videos");
    }
else if(day==='wednesday' || day==='thursday')
    {
        console.log("write code examples");
    }   
else if(day==='friday')
    {
        console.log("record Videos");
    } 
else
{
    console.log("Enjoy Weekend!");    
}        
