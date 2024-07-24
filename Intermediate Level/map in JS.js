// Map in Javascript
const map=new Map();
const k1="string";
const k2={};
const k3=function(){}
map.set(k1,"value1");
map.set(k2,"value2");
map.set(k3,"value3");
console.log(map.keys())
console.log(map.values())
console.log(map.get(k2))
console.log(map.size)
// console.log(map.delete(k1))
console.log(map)

for(let [key,value] of map)
{
   console.log(`${key}----${value}`)
}


for (let key of map.keys())
{
   console.log(key)
}

for (let value of map.values())
{
   console.log(value)
}

const prop=new Map()

prop.set("a",1)
prop.set("b",2)
prop.set("c",3)
console.log(prop.get("a"))
console.log(prop.size)
console.log(prop.delete("b"))
console.log(prop)
