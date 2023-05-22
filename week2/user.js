class User {
    constructor(name, department, phone, age, address) {
        this.name = name;
        this.department = department;
        this.phone = phone;
        this.age = age;
        this.address = address;
    }

    printAll() {
        console.log(this.name + ", " + this.department + ", " + this.phone + ", " + this.age + ", " + this.address);
    }

    printName() {
        console.log(this.name);
    }
}

module.exports = User;