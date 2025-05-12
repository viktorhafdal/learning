import { IPerson } from "../interfaces/IPerson";

export class Person implements IPerson<Person> {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  oldest(other: Person): Person { return this.age > other.age ? this : other }
} 
