const peoples=[
   {name:'Eswar',age:19},
   {name:'Ravi',age:20},
   {name:'Ramu',age:21},
   {name:'Rajesh',age:28},
   {name:'Eswar',age:30},
];

const res=peoples.find(person=>person.name==='Eswar');
console.log(res);

// Example

const posts=[
   {id:1,title:'First Post',body:"Good post"},
   {id:2,title:'Second Post',body:"Sad post"},
   {id:3,title:'Third Post',body:"Good post"},
   {id:4,title:'Fourth Post',body:"Funny post"},
]

const postRes=posts.find(post=>post.body==="Good post");
console.log(postRes);

// challenge

const ages=[10,3,18,20];
function checkAge(age)
{
   return age>18;
}

const ageRes=ages.find(checkAge);
console.log(ageRes);

// challenge-2

// let products=[
//    {name:'Phone',price:100},
//    {name:'Laptop',price:1000},
//    {name:'Camera',price:500},
//    {name:'Headphone',price:100},
// ];

// let product;
// for(let i=0;i<products.length;i++)
// {
//    if(products[i].price===100)
//    {
//       product=products[i];
//       break;
//    }
// }

// console.log(product)


let products=[
   {name:'Phone',price:100},
   {name:'Laptop',price:1000},
   {name:'Camera',price:500},
   {name:'Headphone',price:100},
];

let product=products.find(product=>product.price===100);
console.log(product);
