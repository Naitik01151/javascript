class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME: ${this.username} `);
    }

    static createId(){  // Static is a keyword that does not allow its member to be access by the other function/method
        return `123`
    }
}

const naitik = new User("Naitik")
// console.log(naitik.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new  Teacher("iphone", "iphone@.com")
console.log(iphone.createId());
