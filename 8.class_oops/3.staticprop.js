class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${username}`);
    }
    static createID(){
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const newval = new User("pramodh")
// console.log(newval.createID());

const val1 = new Teacher("Sadia","sadia@gamil")
console.log(val1);