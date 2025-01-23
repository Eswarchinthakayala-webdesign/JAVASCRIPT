async function fetchUsers()
{
    try{

        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        console.log(data)
    }
    catch(error)
    {
        console.log("Something Wrong:",error)
    }
}

fetchUsers()
