//  if

// if(condition){

// }

// const temperature = 42
// if(temperature === 45){
//     console.log("less than 50");
// }
// else{
//     console.log("Not greater than 50");
// }
// console.log("Temperature cool down");

// const score = 200
// if(score>100){ // Block scope starts from here
//     const power = "fly" // var is not used because var has  execution context
//     console.log(`User power:${power}`);
// } // Ends here
// console.log(`User power:${power}`);

// ++++++++++++Shorthand notation ++++++++++++++

//  const balance = 1000
// if(balance>500) console.log("test"),
// console.log("test2");

// if(balance<500){
//      console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("Average balance is below the expected");
// }

const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn == true && debitCard == true)
{
    // console.log("You are allowed to shop");
}
if(loggedInFromGoogle|| loggedInFromEmail)
{
    // console.log(" You are logged in either from google or from E-mail");
    
}

