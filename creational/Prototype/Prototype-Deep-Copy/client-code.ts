import { Address, Person } from "./Prototype-Deep";

const address1 = new Address("Av Brasil", 10);
const person1 = new Person("Taiury", 21);
person1.addAddress(address1);
const person2 = person1.clone();

// person1
console.log(person1); // Person { name: 'Taiury', age: 21 }
console.log(person1.name); // Taiury

// person2
console.log(person2); // Person {}
console.log(person2.name); // Taiury
console.log(person2.addresses); // [ Address { street: 'Av Brasil', number: 10 } ]

// O problema foi corrigido, porém em códigos muito aniandos
// fazer isso seria complicado...

// um exemplo:

// person1
person1.addresses[0].street = "Bla Bla Bla";

// person2
console.log(person2.addresses); // [ Address { street: 'Av Brasil', number: 10 } ]
