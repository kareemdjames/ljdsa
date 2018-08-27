// @ts-check

let myName = 'Kareem';

let age: number = 20;
let existsFlag: boolean = true;
let language = 'Javascript';

let favoriteLanguage: string;
let langs = ['Javascript', 'Ruby', 'Python'];
favoriteLanguage = langs[0];

interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name)
}

const john = { name: 'John', age: 21 };
const mary = { name: 'Mary', age: 21, phone: '123-456-7890' };

printName(john);
printName(mary);
