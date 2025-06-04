//  for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(greet);
}

// Maps (Unique values)

const map = new Map()
map.set('IN', "India")
map.set('US', "United State")
map.set('Fr', "France")
// console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject = {
    GAME1: 'NFS',
    GAME2: 'SPIDERMAN'
}
for (const [key,value] of myObject) {
    console.log(key,':-', value);
    
}