// Enhanced Object

function user(name,age,work)
{
    return {

        name,
        age,
        work,
        intro:()=>
        {
            console.log(`i am ${name} and i am ${age} year old and i am a ${work} developer`);
        },

    }
}

const john=user("John",19,"Developer");
console.log(john.intro())
