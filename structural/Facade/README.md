# Façade

o padrão Façade fornece é uma interface unifica para um conjunto de interfaces em um subsistema. O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.

Exemplo em código:

```ts
// pattern builder
export class Person {
  constructor(public name?: string, public age?: number) {}
}

export class PersonBuilder {
  private person = new Person();

  newPerson(): void {
    this.person = new Person();
  }

  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  get result(): Person {
    return this.person;
  }
}

// pattern Façade
export class PersonFacade {
  private personBuilder = new PersonBuilder();

  makePerson1(): void {
    // person1 = { name: 'Taiury', age: 21 }
    const person1 = personBuilder.setName("Taiury").setAge(21).result;
  }

  makePerson2(): void {
    personBuilder.newPerson(); // clear personBuilder
    // person2 = { name: 'Isa', age: 23 }
    const person2 = personBuilder.setName("Isa").setAge(23).result;
  }
}
```
