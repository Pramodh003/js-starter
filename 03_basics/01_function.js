function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(2,3)

// console.log(result);


function addTwoNumbers(number1,number2){
     
    return number1 + number2;
}

const result = addTwoNumbers(2,3)
// console.log("Result:" , result);

function loginUserMessage(username = "akash"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("pramodh"));