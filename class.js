class User {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
    // Instance method
    getFullName() {
        return this.name + ' ' + this.surname
    }
    static staticMethod() {}
}

User.staticMethod()

class Admin extends User {
    constructor(name, surname) {
        super(name, surname)
        this.admin = true
    }

    superPuperAccess() {
        return 'superPuperAccess'
    }
}

const admin = new Admin('Super', 'Admin')

console.log(admin.getFullName());

// function createUser(name, surname) {
//     return { 
//         name, 
//         surname, 
//         getFullName() {
//             return this.name + ' ' + this.surname
//         }
//     }
// }

// User.prototype.getCapName = function() {
//     return this.name.toUpperCase()
// }

// function UserFunc(name, surname) {
//     this.name = name
//     this.surname = surname
// }

// UserFunc.prototype.getFullName = function() {
//     return this.name + ' ' + this.surname
// }

// UserFunc.getCapName = function() {
//     return this.name.toUpperCase()
// }

// const user = new User('John', 'Smith')
// const user2 = new UserFunc('Kate', 'Ohara')
// // const getFullName = user.getFullName.bind(user2)
// const getFullName = user.getFullName()
// console.log(getFullName())
// console.log(getFullName())
// console.log(createUser('Johny', 'Malcovich').getFullName())
// console.log(User.getCapName())