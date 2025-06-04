function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log( multipleBy5(5));
// console.log( multipleBy5.power);
// console.log( multipleBy5.prototype);

function createUser(username, score){
   this.username = username
   this.score = score
}
// This means Jishne bhi bulaya hai uske paas jayenge
createUser.prototype.increment= function(){
   this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}
const chai = new createUser("chai", 35)// By using new keyword, a new instance has been created to access the function createUser
const tea = new createUser("tea", 350)


chai.printMe()