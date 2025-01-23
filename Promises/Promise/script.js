

const posts=[
    {title:"Post One",body:"This is Post One"},
    {title:"Post Two",body:"This is Post Two"},
]

function getPost()
{
    setTimeout(()=>
    {
          let output='';
          posts.forEach((post)=>
        {
            output+=`<h2>${post.title} </h2> <p>${post.body}</p>`
        })
        document.body.innerHTML=output
    },1000)
}

function createPost(post)
{   

    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                posts.push(post)

                const error=false;
                if(!error)
                {
                    resolve()
                }
                else
                {
                    reject("Error: Something Went Wrong")
                }
               
            },2000)

    })
    
    
}

createPost({title:"Post three",body:"This is post three"})
.then(getPost).catch((error)=>console.log(error))
