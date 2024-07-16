// Every and some methods=========
// Every method is used to check all the elements of the array are same or not
// If all the elements are same then it will return true otherwise false
// Some method is used to check any one element is same or not
// If any one element is same then it will return true otherwise false

// EVERY============================
const peoples1=[
   'Eswar','jordan','alex'
]

let checkPerson1=peoples1.every(person=>person.length===4);
console.log(checkPerson1);

// SOME===============================
const peoples2=[
   'Eswar','jordan','alex'
]

let checkPerson2=peoples2.some(person=>person.length===4);
console.log(checkPerson2);
