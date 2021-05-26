//sub-task1
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

let newUser = new User('John', 'Doe', 'johnD@spaces.ru', 2000);
// console.log(newUser);
// console.log(newUser.getFullname());
// console.log(newUser.getAge());

//sub-task2
function Guest(name, surname, email, yearOfBirth) {
    User.call(this, name, surname, email, yearOfBirth);
};

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.read = function () {
    return `I'm ${this.name}. I can read.`;
};
let newGuest = new Guest('Lisa', 'Simpson', 'liSaS@spaces.ru', 1987);
// console.log(newGuest);
// console.log(newGuest.getFullname());
// console.log(newGuest.getAge());
// console.log(newGuest.read());

function Client(...arg) {
    User.call(this, ...arg);
};

Client.prototype = Object.create(Guest.prototype);
Client.prototype.constructor = Client;

Client.prototype.write = function () {
    return `I'm ${this.name}. I can write.`;
};
let newClient = new Client('Homer', 'Simpson', 'hommyS@spaces.ru', 1961);
// console.log(newClient)
// console.log(newClient.getFullname());
// console.log(newClient.getAge());
// console.log(newClient.read());
// console.log(newClient.write());

function Moderator(...arg) {
    User.call(this, ...arg);
};

Moderator.prototype = Object.create(Client.prototype);
Moderator.prototype.constructor = Moderator;

Moderator.prototype.update = function () {
    return `I'm ${this.name}. I can update.`;
};
let newModerator = new Moderator('Bart', 'Simpson', 'Bbart@spaces.ru', 1985);
// console.log(newModerator);
// console.log(newModerator.getFullname());
// console.log(newModerator.getAge());
// console.log(newModerator.read());
// console.log(newModerator.write());
// console.log(newModerator.update());

function Admin(...arg) {
    User.call(this, ...arg);
};

Admin.prototype = Object.create(Moderator.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.remove = function () {
    return `I'm ${this.name}. I can remove.`;
};
let newAdmin = new Admin('Marge', 'Simpson', 'marGGe@spaces.ru', 1963);
// console.dir(newAdmin);
// console.log(newAdmin.getFullname());
// console.log(newAdmin.getAge());
// console.log(newAdmin.read());
// console.log(newAdmin.write());
// console.log(newAdmin.update());
// console.log(newAdmin.remove());