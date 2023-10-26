const accountId = 14453
let accountEmail = "pramodhbr29@gmail.com" 
var accountPassword = "123@sirpi.io"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "pramodh@sirpi.io"
accountPassword = "123sirpi.io"
accountCity = "Benagaluru"


/*

Prefer not to use var because of issue in block scope and functional scope

*/
console.table([accountEmail,accountPassword,accountCity,accountState]);