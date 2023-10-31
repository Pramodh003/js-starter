const marvel_heroes = ["thor","Iron"]
const dc = ["superman","batman","flash"]

// marvel_heroes.push(dc)

// console.log(marvel_heroes);

// let dv_marvel = marvel_heroes.concat(dc)
// console.log(dv_marvel);

const all_new_heroes = [...marvel_heroes, ...dc]
// console.log(all_new_heroes);

const another_array = [1,2,3,4,5,[4,5,6],7,[6,7,[4,5]]]

// const useable_array = another_array.flat(Infinity)
// console.log(useable_array);

console.log(Array.isArray("Pramodh"));
console.log(Array.from("Pramodh"));
console.log(Array.from({name: "Pramod"}));  // Interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

