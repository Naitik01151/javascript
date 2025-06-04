// Immediately Invoked Function Expressions (IIFE)

//  Two IIFE at once 
(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})(); //Semi-colon is compulsary 

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
})('Naitik')