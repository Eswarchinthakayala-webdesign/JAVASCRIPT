
// Rest operator 
function user(x,y,...userData)
{    
    console.log(x);
    console.log(y)
    console.log(userData)
}

user("Eswar",19,"developer",'cricket');

// Example-2

function person(firstName,lastName,...hobbies)
{
    console.log(firstName);
    console.log(lastName);
    console.log(hobbies)
}

person("Eswar","Chinthakayala",'circket','coding');
