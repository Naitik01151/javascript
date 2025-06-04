// const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discriptor);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'gingerTea',
    price: 245,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai faat gyi");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "price", {
//     writable : false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "price")

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key} : ${value}`);
        
    }
}