
const person=
{
  name:'Eswar',
  age:27,
  gender:'male'
}

function printPersonInfo({name,age,gender})
{
  console.log(`Name:${name}`);
  console.log(`Age:${age}`);
  console.log(`Gender:${gender}`);
}
printPersonInfo(person)

// type in function destructuring

let options=
{
    title:"Menu",
    items:['item1','item2'],
}

function showMenu({title,width:w=100,height:h=300,items})
{
    console.log(`Title:${title} ${w} ${h}`);
    console.log(`Items:${items}`)
}

showMenu(options)
