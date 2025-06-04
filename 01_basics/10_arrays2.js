// Array

const marvel_Heros = ["Thor","Spiderman","Ironman","Captain_America"]
const dc = ["Superman","Batman","Flash"]

// marvel_Heros.push(dc)

// console.log(marvel_Heros);
// console.log(marvel_Heros[4][1]);

// const Series=marvel_Heros.concat(dc)
// console.log(Series);

const Series_Heros = [...marvel_Heros, ...dc]

// console.log(Series_Heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

let real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Naitik"))
// console.log(Array.from("Naitik"))
// console.log(Array.from({name: "Naitik"}))  //  Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));