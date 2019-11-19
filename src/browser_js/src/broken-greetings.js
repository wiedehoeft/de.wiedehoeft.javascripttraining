function Person(name) {
    this.name = name;
}

Person.prototype.greet = function (otherName) {
    return "Hi " + otherName + ", my name is " + this.name;
};

function helloWorld() {
    return 'Hello World';
}
