//Coding Challenge-1

const marksWeight=78;
const marksHeight=1.69;
const jonasWeight=92;
const jonasHeight=1.95;

const jonasBMI=jonasWeight/(jonasHeight**2);
const marksBMI=marksWeight/(marksHeight*marksHeight);

if(jonasBMI>marksBMI)
    {
        console.log(` jonas's BMI is higher than Mark's`)
    }
    else{
        console.log(`mark's BMI is higher than jonas`)
    }
if(marksBMI>jonasBMI)
    {
        console.log(`mark's BMI(${marksBMI.toFixed(2)}) is higher than jonas(${jonasBMI.toFixed(2)})`);
    }
    else{

        console.log(`jonas BMI(${jonasBMI.toFixed(2)}) is higher than mark's(${marksBMI.toFixed(2)})`);

    }
