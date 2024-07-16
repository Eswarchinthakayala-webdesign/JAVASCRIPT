

const colors=['red','blue','green'];

// for(var i=0;i<colors.length;i++)
// {
//   console.log(colors[i])   
// }


colors.forEach(color=>console.log(color));

// example 2

const words=['hello','bird','table','crow','rat','lion'];

const cap=words.forEach((word,index,arr)=>
{
   arr[index]=word[0].toUpperCase()+word.substring(1);

})

console.log(words)
