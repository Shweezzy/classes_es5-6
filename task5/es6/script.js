export class User {
    constructor(name, surname, email, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
    }

    getFullname() {
        return `${ this.name } ${ this.surname }`;
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
};

//sub-task 2
export class Admin extends User {
    read() {
        return `I'm ${this.name}. I can read.`;
    }

    write() {
        return `I'm ${this.name}. I can write.`;
    }

    update() {
        return `I'm ${this.name}. I can update.`;
    }

    remove() {
        return `I'm ${this.name}. I can remove.`;
    }
}

export class Moderator extends User {
    read() {
        return `I'm ${this.name}. I can read.`;
    }

    write() {
        return `I'm ${this.name}. I can write.`;
    }

    update() {
        return `I'm ${this.name}. I can update.`;
    }
}

export class Client extends User {
    read() {
        return `I'm ${this.name}. I can read.`;
    }
    write() {
        return `I'm ${this.name}. I can write.`;
    }
}

export class Guest extends User {
    read() {
        return `I'm ${this.name}. I can read.`;
    }
}

const admin = new Admin("Dmytro", "Yummy", "dmytro@test.com", 1995);
const moderator = new Moderator("Alex", "Morti", "alex@test.com", 1982);
const client = new Client("John", "Smith", "john@test.com", 1976);
const guest = new Guest("Robert", "Merlo", "robert@test.com", 1999);

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
admin.write();
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