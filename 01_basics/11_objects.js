//  Singleton

//  Object literals
// Object.create

const mySym = Symbol("Key1")


const JsUser = {
    name:"Naitik",
    "Full name": "Naitik gupta",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "Naitikgupta@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
} 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "gupta@gmail.com"
JsUser.location = "Manali"
// Object.freeze(JsUser);// Freeze basically freezes the data and changes cannot be made
JsUser.location = "Kanpur"// Values are not changed 
JsUser.age = 21// Values are not changed 
// console.log(JsUser);


// Functions
JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
console.log(JsUser.greeting);// Function does not execute and return the reference of the function
// Another function 
JsUser.greetingTwo = function(){
console.log(`Hello JS User,${this.name}`); // String intemulation
    // Same object ko reference karna hai toh hum use karenge this keyword
}
console.log(JsUser.greeting());// Function does not exicute and return the reference of the function
console.log(JsUser.greetingTwo());// Function does not exicute and return the reference of the function