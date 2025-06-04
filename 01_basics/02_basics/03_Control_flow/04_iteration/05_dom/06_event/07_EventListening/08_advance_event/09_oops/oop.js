// const user ={
    // username: "hitesh",
    // loginCount: 8,
    // signedIn: true,

    // getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    // }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = this.isLoggedIn
    return this
}
const userOne =new user("Hitesh", 12, true)
const userTwo =new user("ChaiAurCode", 18 ,true)
console.log(userOne);
console.log(userTwo);