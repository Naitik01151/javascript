// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
        
    }
    // console.log(element);
    
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop: ${j} and inner loop ${i}`);
        
        // console.log(i +'*' + j + ' = ' + i*j);
    }
}
let myArray = ["Flash","Batman","Superman","Spiderman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    console.log(`value of i is: ${index}`);
    if(index == 5)
    {
        console.log(`5 is the best number`);
        break;      
    }
}
for (let index = 1; index <= 20; index++) {
    if(index == 5)
    {
        console.log(`5 is the best number`);
        continue;   
    }
    console.log(`value of i is: ${index}`);
}