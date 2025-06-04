// Primitive


// 7 types : string,number,boolean,null,undefined,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);


const bigNumber = 3434434332432432324324n



// Reference(Non primitive)

// Array, objects, functions


const heros = ["Spider-man","Captain America","Iron man","Scarlet witch"]
let myObj = {
    name: "Naitik",
    age: 22,
}


const myFunction = function(){
    // console.log("Hello world");
    
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);

// +++++++++++++++++++++++++++++++++++++++++++++++++

// Memory is of two types 

// Stack(Primitive) and Heap(Non-primitive)


let myYoutubename =  "Naitikcom"

let anothername = myYoutubename

// console.log(anothername);
// console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    UPI: "user@ybl"
}


let userTwo = userOne 

userTwo.email = "naitik@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);