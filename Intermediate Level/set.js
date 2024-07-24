// sets
const numbers=[1,2,3,4,5,6,6,3,2,4]
const set=new Set(numbers)
set.add(12)
console.log(set)

for (let num of set)
{
   console.log(num);
}
