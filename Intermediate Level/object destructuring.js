const student=
{
    name:'Eswar',
    position:'first',
    rollNo:27

}

const {name}=student;
console.log(name);
// changing the label in destructuring for objects

const nums={x:100,y:200};
const {x:num1,y:num2}=nums;
console.log(num1,num2)
