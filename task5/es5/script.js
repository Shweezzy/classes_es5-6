function User(name, surname, email, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.yearOfBirth = yearOfBirth
};

User.prototype.getFullname = function () {
    return this.name + ' ' + this.surname;
};

User.prototype.getAge = function () {
    return new Date().getFullYear() - this.yearOfBirth;
};

//sub-task2
function Guest(name, surname, email, yearOfBirth) {
    User.call(this, name, surname, email, yearOfBirth);
};

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.read = function () {
    return `I'm ${this.name}. I can read.`;
};

function Client(...arg) {
    User.call(this, ...arg);
};

Client.prototype = Object.create(User.prototype);
Client.prototype.constructor = Client;

Client.prototype.read = function () {
    return `I'm ${this.name}. I can read.`;
};
Client.prototype.write = function () {
    return `I'm ${this.name}. I can write.`;
};

function Moderator(...arg) {
    User.call(this, ...arg);
};

Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.constructor = Moderator;

Moderator.prototype.read = function () {
    return `I'm ${this.name}. I can read.`;
};
Moderator.prototype.write = function () {
    return `I'm ${this.name}. I can write.`;
};
Moderator.prototype.update = function () {
    return `I'm ${this.name}. I can update.`;
};

function Admin(...arg) {
    User.call(this, ...arg);
};

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.read = function () {
    return `I'm ${this.name}. I can read.`;
};
Admin.prototype.write = function () {
    return `I'm ${this.name}. I can write.`;
};
Admin.prototype.update = function () {
    return `I'm ${this.name}. I can update.`;
};
Admin.prototype.remove = function () {
    return `I'm ${this.name}. I can remove.`;
};


const admin = new Admin("Dmytro", "Yummy", "dmytro@test.com", 1995);
const moderator = new Moderator("Alex", "Morti", "alex@test.com", 1982);
const client = new Client("John", "Smith", "john@test.com", 1976);
const guest = new Guest("Robert", "Merlo", "robert@test.com", 1999);

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