//type conversion

//string to Number
const inputYear='1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+19);

console.log(Number('jonas')); //invalid number
console.log(typeof NaN); //number

console.log(String(23),23);

console.log(typeof String(23)); //string


//type coercion

console.log('i am '+ 23  +' years old');
console.log('23'-'10'-3);  //(-) works in coercion
console.log('23'*'2');//(*,/) works in coercion
console.log('23'+'23');//(+) not works in coercion

let n='1'+1; //n=11
console.log(n);
n=n-1;  //n=10 
console.log(n);  //output=10
