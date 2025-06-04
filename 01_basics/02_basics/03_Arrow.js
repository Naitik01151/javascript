const user = {
    username: "Naitik",
    price: 999,

    welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
    //  console.log(this);
      // This keyword prints the current context who are visiting in the website
      
   }
}
// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

//  console.log(this);
// We can't access the variable using this in functions


// function chai(){
//     let username = "Naitik"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
    
// }
const chai = () =>{
    let username = "Hitesh"
    // console.log(this);
    
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// Implicit return

//  const addTwo = (num1,num2) => num1 + num2

// console.log(addTwo(3,4));

const addTwo = (num1,num2) => ({username: "hitesh"})

console.log(addTwo(3,4));