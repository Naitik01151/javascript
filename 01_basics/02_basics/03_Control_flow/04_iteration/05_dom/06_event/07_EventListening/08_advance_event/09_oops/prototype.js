let myName = "Naitik      "
let myChannel = "chai      "

// console.log(myName.truelength());

let myHero = ["Thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`Spider power is ${this.spiderman}`);
        
    }
}

Object.prototype.Naitik = function(){
    // console.log(`Naitik is present in all objects`);
    
}

Array.prototype.heyNaitik = function(){
    // console.log(`Naitik say hello`);
}

// heroPower.hitesh()
// myHero.Naitik()
// myHero.heyNaitik()
// heroPower.heyNaitik()
// heroPower.Naitik()

// myHero.Naitik()

// Inheritance

const User = {
    name: "chai",
    email: "google.com"
}
const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}

teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername= "Chai aur code    "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"Naitik".trueLength()