// arrays

const myarrays = [1,2,34,4,5]
const myHeroes = ["thor","shaktiman"]


const myArray2 = new Array(1,2,3,4,5)

console.log(myarrays[1]);

//Array methods

// myArray2.push(6)
// myArray2.push(7)
// myArray2.push(8)
// myArray2.pop()
// myArray2.shift()
// myArray2.unshift(9)

// console.log(myArray2.includes(9));
// console.log(myArray2.indexOf(2));

// const newArr = myArray2.join()
// console.log(newArr);

// console.log(typeof newArr);

// console.log(myArray2);

//  slice splice

console.log("A",myArray2);

const myn1 = myArray2.slice(1,3);
console.log(myn1);
console.log("B",myArray2);

const myn2 = myArray2.splice(1,3);
console.log("C",myArray2);
console.log(myn2);

