// if
// const isUserLoggedIn = true
// if ( 2 === "2"){
//     console.log("executed");
// }

// else{
//     console.log("not executed");
// }

// < , >, = , <= ,>= , == , != , === 

const temperature = 451

// if (temperature < 50){
//     console.log("Temperature is less than 50");
// }else{
//     console.log("Temperature is more than 50");
// }

// const score = 101

// if (score > 100){
//     const power = "fly"
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);
// const balance = 1000
// if (balance>500) console.log("test");


const userLoggedin = true
const debitcard = false
const LoggedInFromGoogle = false
const LoggedInFromEmail = false
if (userLoggedin && debitcard){
    console.log("Allow to buy course");
}
else{
    console.log("Dont buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User logged in");
}
else{
    console.log("User cannot login");
}