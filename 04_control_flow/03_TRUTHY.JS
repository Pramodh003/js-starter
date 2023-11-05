const userEmail = []

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have useremail");
}

// falsy values

// false , 0 , -0, BigInt , 0n , "" , null ,undefined , NaN

// truth values
// "0" , "false" , " " , [] , {} ,function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// const empytObj = {}

// if (Object.keys(empytObj).length === 0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operatore(??): Null undefined

let val1;
 // val1 = 5 ?? 10 
// val1 = null ?? 10
// var1 = undefined ?? 15

val1 = null ?? 5 ?? 10


console.log(val1);
// console.log(var1);

// Terinary operator

// condition ? true : false

const iceTeaPrice =  100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("Greater than 80");
