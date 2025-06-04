
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
   }
   
   // sayMyName()
   
   // function addTwoNumber(num1,num2){
   // console.log( num1 + num2);
   
   //}
   // function addTwoNumber(num1,num2){
       
   //     let result = num1 +num2
   //      return result
       
   //     return num1 + num2
   // }
   //     const result = addTwoNumber(3,7) //result is defined outside the scope so that reason result is undefined
   
   //     console.log("Result:" ,result);
   
   // function loginUserMessage(username){
   //     if(username === undefined){ // By using strictly checker
   //         console.log("Please enter a username");
   //         return
   //     }
   //     return `${username} just logged in`
   // }
   // // console.log(loginUserMessage("Hitesh"));
   // console.log(loginUserMessage());
   
   // By using if condition
   function loginUserMessage(username="Sam"){
       if(username === undefined){ // By using strictly checker
           console.log("Please enter a username");
           return
       }
       return `${username} just logged in`
   }
   // console.log(loginUserMessage("Hitesh"));
   // console.log(loginUserMessage("Hitesh"));
   
   // When we have a cart of e-commerce, and price of the cart increasing with the increase in number of order
   
   function calculateCartPrice(val1,val2, ...num1){// rest/spread operator
       return num1
   }
   // console.log(calculateCartPrice(200,400,500,2000));
   
   const user = {
       username: "Naitik",
       price: 199
   }
   function handleObject(anyobject){
       console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
   }
   
   // handleObject(user)
   handleObject({
       username: "sam",
       price: 399
   })
   
   const myNewArray = [200,400,100,600]
   
   function returnSecondValue(getArray){
       return getArray[1]
   }
   // console.log(returnSecondValue(myNewArray));
   console.log(returnSecondValue([200,400,100,600]));
   
   