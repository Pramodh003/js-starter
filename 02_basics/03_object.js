// singleton

// object literals

const mySym = Symbol("key1") 

const JsUser = {
    name: "pramodh",
    "Full Name": "Pramodh B R",
    [mySym]: "myKey1",   //add it square bracket to call the symbol datatype
    age: 28,
    location: "Mysore",
    Email: "pramodhbr29@gamil.com",
    Loggedin: false,
    LastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mySym]);

JsUser.Email=  "pramodh@sirpi.io"

// console.log(JsUser["Email"]);

// freezing the object

Object.freeze(JsUser)
JsUser.Email = "Akashpapu37@gmail.com"

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hi Welcome for JAVASRIPT coding");
}

console.log(JsUser.greeting);
