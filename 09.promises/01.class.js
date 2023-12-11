// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },2000)
// })


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2 initiated");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async2 is resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "pramodh",email: "akash@gmail.com"})
//     })
// })

// promiseThree.then(function(user1){
//     console.log(user1);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Pramodh",password: "1234"})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(() => {
//     console.log("Promise is either resolver or rejected");
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Javascript",password: 1234})
//         }else{
//             reject("ERROR: JS went wrong")
//         }
//     },2000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getAllUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
// }

// getAllUser()



// fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

fetch("https://api.github.com/users/hiteshchoudhary").then((response) =>{
    return response.json()
}).then((data) => console.log(data)).catch((error) => console.log(erro))