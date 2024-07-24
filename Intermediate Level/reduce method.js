// reduce method
// reduce() method executes a reducer function (that you provide) on each element of the array,
// resulting in single output value.
const numbers=[1,2,3,4,5]
const sum=numbers.reduce((p,c)=>{
console.log("Previous Value:",p);
console.log("Current Value:",c);
return p+c;

},0)

console.log(sum)

const people=[
   {
      name:"Eswar",
      age:19,
   },
   {
      name:"Ravi",
      age:20,
   },
   {
      name:"Sai",
      age:21,
   },
];
const states=people.reduce((p,c)=>{
   console.log("Previous",p);
   console.log("Current:",c.age);
},0)
const oldestAge=people.reduce((p,c)=>(c.age>p?c.age:p),0)

console.log(oldestAge)

const words=[
   "apple",
   "banana",
   "orange",
   "apple",
   "grape"
];

const wordFrequency=words.reduce((frequencyMap,word)=>
{   

   console.log(frequencyMap)
   console.log(word)
   
   frequencyMap[word]=(frequencyMap[word]||0+1)
   return frequencyMap;

},{})
console.log(wordFrequency)
