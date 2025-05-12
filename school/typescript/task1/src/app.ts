import { Person } from "./types/classes/Person";

const person1 = new Person('John', 32);
const person2 = new Person('Felix', 22);

console.log(person1.oldest(person2));
