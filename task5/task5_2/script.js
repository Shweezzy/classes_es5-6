import {
    User
} from '../task5_1/script.js';

class Guest extends User {
    read() {
        return `I'm ${this.name}. I can read.`;
    }
}

class Client extends Guest {
    write() {
        return `I'm ${this.name}. I can write.`;
    }
}

class Moderator extends Client {
    update() {
        return `I'm ${this.name}. I can update.`;
    }
}

class Admin extends Moderator {
    remove() {
        return `I'm ${this.name}. I can remove.`;
    }
}

let newAdmin = new Admin('Anastasia', 'Semerenko', 'lyuba22@spaces.com', 1999);
let newModerator = new Moderator('Anna', 'Petrenko', 'pety27@spaces.com', 1998);
let newClient = new Client('Lisa', 'Kulyk', 'kulya52@spaces.com', 1986);
let newGuest = new Guest('Dimitry', 'Noisenko', 'nosok99@spaces.com', 1999);

// console.log(newAdmin.remove())
// console.log(newModerator.update())
// console.log(newClient.write())
// console.log(newGuest.read())