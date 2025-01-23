// // call back means creating a callback func inside another func

// function fetchData(callback)
// {
//     setTimeout(()=>
//     {
//         console.log("Data Fetched")
//         callback("Call Back Data")
//     },1000)
// }

// fetchData((data)=>
// {
//     console.log(data)
// })

//Example 1

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



function createPost(post,callback)
{   
    setTimeout(()=>
{
    posts.push(post)
    callback()
},2000)
    
}

createPost({title:"Post three",body:"This is post three"},getPost)
