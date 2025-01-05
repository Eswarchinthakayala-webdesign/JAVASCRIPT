const myForm=document.getElementById('my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')


myForm.addEventListener('submit',(e)=>
{
    e.preventDefault()
    if(nameInput.value==="" || emailInput.value==="")
    {
        msg.classList.add('error')
        msg.innerHTML="please enter all fields"
        setTimeout(()=>
        {
            msg.remove()
        },3000)
    }
    else
    {
        const li=document.createElement('li')
        li.textContent=`Name: ${nameInput.value} Email: ${emailInput.value}`
        userList.appendChild(li)

        nameInput.value=""
        emailInput.value=""
    }
})