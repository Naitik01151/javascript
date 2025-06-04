// const tinderUser = new Object()//Singleton object
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);// Display empty objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Naitik",
            lastname: "Gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2,obj3)

// const obj3= { obj1,obj2}
// console.log(obj4);

const obj4 = {...obj1, ...obj2}//Split function

// console.log(obj4);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));


// ++++++++++++++Destructing or Destructure++++++++++++++++++

const course = {
    coursename: "js in hindi",//Declaring the value inside the objects
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course //Destruct the value of courseInstructor
console.log(Instructor);

// {
//     "name": "Hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {}
]