class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`

    }

    changuserName(){
        return `${this.username.toUpperCase()}`
    }
}

const value = new user("pramodh","pramodh@gamil","123")
console.log(value.encryptPassword());
console.log(value.changuserName());

// function User(username,email,password) {
//     this.username = username
//     this.email = email
//     this.password = password
    
// }

// User.prototype.changeName = function () {
//     return `${this.username.toUpperCase()}`
// }

// User.prototype.encryptPassword = function () {
//     return `${this.password}abc`
// }


// const tea = new User("tea","tea@gmail.com","123")
// console.log(tea.changeName());
// console.log(tea.encryptPassword());
