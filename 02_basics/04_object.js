// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "prmaod@gamil.com",
    fullname : {
        userfullName: {
            firstName: "Pramodh",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullname?.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "c", 5: "d"}


// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4) //empty bracket will be target here

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "pramodh@gamil.com"
    },
    {
        id: 1,
        email: "pramodh@gamil.com"
    },    {
        id: 1,
        email: "pramodh@gamil.com"
    },    {
        id: 1,
        email: "pramodh@gamil.com"
    },    {
        id: 1,
        email: "pramodh@gamil.com"
    },    {
        id: 1,
        email: "pramodh@gamil.com"
    },    {
        id: 1,
        email: "pramodh@gamil.com"
    },    {
        id: 1,
        email: "pramodh@gamil.com"
    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("loggedIn"));
