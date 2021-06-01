// second way
class User {
    constructor(name, surname, email, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
        this.permission = ['read'];
    }

    getFullname() {
        console.log(`${this.name} ${this.surname}`);
    }

    getAge() {
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
}

class Guest extends User {
    read() {
        console.log(`I'm ${this.name}. I can read.`);
    }

}

class Client extends Guest {
    constructor(...arg) {
        super(...arg)
        this.permission.push('write');
    }
    write() {
        console.log(`I'm ${this.name}. I can write.`);
    }
    log() {
        console.log(this.permission)
    }
}

class Moderator extends Client {
    constructor(...arg) {
        super(...arg)
        this.permission.push('update');
    }
    update() {
        console.log(`I'm ${this.name}. I can update.`);
    }
}

class Admin extends Moderator {
    constructor(...arg) {
        super(...arg)
        this.permission.push('remove');
    }
    remove() {
        console.log(`I'm ${this.name}. I can remove.`);
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

// second way
class User1 {
    create(...arg) {
        let [
            name,
            surname,
            email,
            yearOfBirth,
            role
        ] = [
            ...arg
        ]
        let user

        if (arg.includes('admin')) user = new Admin(...arg);
        else if (arg.includes('moderator')) user = new Moderator(...arg);
        else if (arg.includes('client')) user = new Client(...arg);
        else user = new Guest(...arg);
        user.getFullname = function () {
            console.log(`${name} ${surname}`);
        };

        user.getAge = function () {
            console.log(new Date().getFullYear() - yearOfBirth);
        };

        return user;
    }
}

class Guest1 {
    constructor(...arg) {
        //test
        [this.name, this.surname] = [...arg]
        this.permission = ['read']
    }
    read() {
        console.log(`I'm ${this.name}. I can read.`);
    }
}

class Client1 extends Guest1 {
    constructor(name) {
        super(name);
        this.permission.push('write')
    }
    write() {
        console.log(`I'm ${this.name}. I can write.`);
    }
}

class Moderator1 extends Client1 {
    constructor(name) {
        super(name);
        this.permission.push('update')
    }
    update() {
        console.log(`I'm ${this.name}. I can update.`);
    }
}
class Admin1 extends Moderator1 {
    constructor(name) {
        super(name);
        this.permission.push('remove')
    }
    remove() {
        console.log(`I'm ${this.name}. I can remove.`);
    }
}


const factory = new User1()
admin1 = factory.create("Dimitry", "Yummy", "dmytro@test.com", 1995, "admin");
moderator1 = factory.create("Alex", "Morti", "alex@test.com", 1982, "moderator");
client1 = factory.create("John", "Smith", "john@test.com", 1976, "client");
guest1 = factory.create("Robert", "Merlo", "robert@test.com", 1999, "guest");

admin.getAge();
admin.getFullname();
admin.read();
admin.update();
admin.remove();
console.log(admin.permission);

moderator.getAge();
moderator.getFullname();
moderator.read();
moderator.write();
moderator.update();
console.log(moderator.permission);

client.getAge();
client.getFullname();
client.read();
client.write();
console.log(client.permission);

guest.getAge();
guest.getFullname();
guest.read();
console.log(guest.permission);

admin1.getAge();
admin1.getFullname();
admin1.read();
admin1.update();
admin1.remove();
console.log(admin1.permission);

moderator1.getAge();
moderator1.getFullname();
moderator1.read();
moderator1.write();
moderator1.update();
console.log(moderator1.permission);

client1.getAge();
client1.getFullname();
client1.read();
client1.write();
console.log(client1.permission);

guest1.getAge();
guest1.getFullname();
guest1.read();
console.log(guest1.permission);