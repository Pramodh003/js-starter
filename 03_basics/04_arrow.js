// "this" always refers to current context. here context means variables with curly bracket
const user = {
    username: "Akash",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "pramodh"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "akash"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "akash"
//     console.log(`${this.username}`);
// }

// const chai = () => {
//     let username = "akash"
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2

// }


//const addTwo = (num1,num2) => (num1 + num2)
// const addTwo = (num1,num2) => ({username: "Akash"})


// console.log(addTwo(3,4));

const myarray = [2,3,4,5,6]