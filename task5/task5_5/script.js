class User {
    constructor(name, surname, email, yearOfBirth, permission) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
        this.permission = permission;
    }

    getFullname() {
        console.log(`${this.name} ${this.surname}`);
    }

    getAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

class Admin extends User {
    read() {
        console.log(`I'm ${this.name}. I can read.`);
    }

    write() {
        console.log(`I'm ${this.name}. I can write.`);
    }

    update() {
        console.log(`I'm ${this.name}. I can update.`);
    }

    remove() {
        console.log(`I'm ${this.name}. I can remove.`);
    }
}

class Moderator extends User {
    read() {
        console.log(`I'm ${this.name}. I can read.`);
    }

    write() {
        console.log(`I'm ${this.name}. I can write.`);
    }

    update() {
        console.log(`I'm ${this.name}. I can update.`);
    }
}

class Client extends User {
    read() {
        console.log(`I'm ${this.name}. I can read.`);
    }
    write() {
        console.log(`I'm ${this.name}. I can write.`);
    }
}

class Guest extends User {
    read() {
        console.log(`I'm ${this.name}. I can read.`);
    }
}


const userFactory = {
    makeUser(...arg) {
        if (arg.includes('admin')) return new Admin(...arg)
        else if (arg.includes('moderator')) return new Moderator(...arg)
        else if (arg.includes('client')) return new Client(...arg)
        else return new Guest(...arg)
    },
};

const admin = userFactory.makeUser("Dmytro", "Yummy", "dmytro@test.com", 1995, 'admin');
const moderator = userFactory.makeUser("Alex", "Morti", "alex@test.com", 1982, 'moderator')
const client = userFactory.makeUser("John", "Smith", "john@test.com", 1976, 'client');
const guest = userFactory.makeUser("Robert", "Merlo", "robert@test.com", 1999, 'guest');

function getAllMethods(object) {
    return Object.getOwnPropertyNames(object.__proto__).filter(function (property) {
        return typeof object[property] === 'function';
    });
}

console.log(getAllMethods(admin));
console.log(getAllMethods(moderator));
console.log(getAllMethods(client));
console.log(getAllMethods(guest));

admin.getAge();
admin.getFullname();
admin.read();
admin.update();
admin.remove();

moderator.getAge();
moderator.getFullname();
moderator.read();
moderator.write();
moderator.update();

client.getAge();
client.getFullname();
client.read();
client.write();

guest.getAge();
guest.getFullname();
guest.read();