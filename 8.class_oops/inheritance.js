class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }

}

const newUser = new Teacher("pramodh","pramodh@gmail","hjchh")
newUser.addCourse()

const newUser1 = new User("Pramodh")
newUser1.logMe()

console.log(newUser instanceof Teacher);
console.log(Teacher instanceof User);
