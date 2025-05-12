"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    oldest(other) { return this.age > other.age ? this : other; }
}
