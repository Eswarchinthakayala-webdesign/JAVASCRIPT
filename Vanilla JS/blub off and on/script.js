const bulbon=document.getElementById('bulbon')
const bulboff=document.getElementById('bulboff')

bulboff.addEventListener('click',()=>
{
    document.getElementById('bulb').src="blubon.png"
})
bulbon.addEventListener('click',()=>
    {
        document.getElementById('bulb').src="bluboff.png"
    })