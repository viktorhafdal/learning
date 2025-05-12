export interface IPerson<T> {
  name: string;
  age: number;
  oldest(other: T): T;
}
