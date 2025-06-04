// var c = 300  // Global scope
let a = 300

if(true){ // Block scope
    let a = 10
const b = 20
var c = 30
// console.log("INNER:",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Naitik"
    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website); // Block scope of one
    two() // Chota bhai kar sakta hai
} // chota bade chin nahi sakta par chota bade se chin sakta hai
// one() // Bada bhai function two() ki properties ko excess nahi kar sakta

// ++++++++++++++ ********** Closure ***********++++++++++
if(true){
    const username = "Naitik"
    if(username == "Naitik"){ // Block of website starts here
        const website = " youtube"
        // console.log(username + website);
    }// End here
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++
console.log(addone(5));
function addone(value){
    return value + 1
}
// Generates the error

console.log(addTwo(5));

const addTwo = function(value){// Hoshing
    return value + 2
}