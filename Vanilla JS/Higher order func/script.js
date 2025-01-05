const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //forEach=> used for display items
  //map=> used to transform
  //reduce
  //filter
  //sort

  //FOREACH
//   for(let i=0;i<companies.length;i++)
//   {
//     console.log(companies[i],i);
//   }


//   companies.forEach((com,k)=>
//   {
//     console.log(com,k)
   
//   }
//   )

//FILTER
// let filterAges=[];
// for(let i=0;i<ages.length;i++)
// {
//   if(ages[i]%2==0)
//   {
//     filterAges.push(ages[i])
//   }
// }

// console.log(filterAges)



// const filterAges=ages.filter(age=>age<100)
// console.log(filterAges)

// const oldCompanies=companies.filter(company=>company.end<2000)
// console.log(oldCompanies)
// const longCompanies=companies.filter(company=>(company.end-company.start)>20)
// console.log(longCompanies)


//map=>used to create new array ,by applying provided function to it

// const testingMap=companies.map(company=>{
//     return `${company.name} -- [${company.start},${company.end}]`
// }
// )
// console.log(testingMap)

// const agesSQRT=ages.map(age=>Math.pow(age,2))
// console.log(agesSQRT)


// const testMap=ages.map(age=>age*2).map(age=>Math.pow(age,2))
// console.log(testMap)


//sort

const agesTest=ages.filter(age=>age>20).map(age=>age*2).sort((a,b)=>a-b)
console.log(agesTest)

//reduce=>
    //used to get a single value from the array by applying reducer function

const sumAges=ages.reduce((acc,cur)=>
{
    return acc+cur;
})
console.log(sumAges)