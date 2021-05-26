class User {

    constructor(name, surname, email, yearOfBirth) {
        this.name = name,
            this.surname = surname,
            this.email = email,
            this.yearOfBirth = yearOfBirth
    }

    getFullname() {
        return `${ this.name } ${ this.surname }`;
    }
    getAge() {
        return new Date().getFullYear() - this.yearOfBirth
    }
};

let newUser = new User('Ivan', 'Ivanov', 'ivanovIV@spaces.ru', 1996)