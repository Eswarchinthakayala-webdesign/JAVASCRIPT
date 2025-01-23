async function init()
{
    await createPost({title:"Post three",body:"This is post three"})
    getPost()
}

init()
