'use strict';

export function Person(name) {
    this.name = name;

    Person.prototype.greet = function (otherName) {
        return "Hi " + otherName + ", my name is " + name;
    };
}
