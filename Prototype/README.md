# Prototype

Esse padrão permite a você especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.

Exemplo em código:

```ts
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}
  clone(): this {
    // Isso não é um clone!
    // Estamos apenas craindo um novo objeto
    // que tem este objeto como protótipo
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person1 = new Person("Taiury", 21);
const person2 = person1.clone();

// person1
console.log(person1); // Person { name: 'Taiury', age: 21 }
console.log(person1.name); // Taiury

// person2
console.log(person2); // Person {}
console.log(person2.name); // Taiury

// person1 é o protótipo de person2
console.log(person1 === Object.getPrototypeOf(person2)); // true
```

Um exemplo menos verboso que faria a mesma coisa seria:

```ts
const person1 = {
  name: "Taiury",
  age: 21,
};

const person2 = Object.create(person1);

// person1
console.log(person1); // { name: 'Taiury', age: 21 }
console.log(person1.name); // Taiury

// person2
console.log(person2); // {}
console.log(person2.name); // Taiury

// person1 é o protótipo de person2
console.log(person1 === Object.getPrototypeOf(person2)); // true
`
```
