const p1=Promise.resolve("Hello World")
const p2=10
const p3=new Promise((resolve,reject)=>
{
    setTimeout(resolve,1000,"Good Bye")
})
const p4=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

Promise.all([p1,p2,p3,p4]).then(val=>
    console.log(val)
)
