# Builder

Esse padrão sugere a separação do código que cria e o código que usa o objeto.<br>

- trata da criação de objetos complexos

  - Construtores muito complexos.
  - Composição de vários objetos (composite).
  - Algoritmos de criação de objetos complexos.

- Permite a criação de objetos em etapas.
- Permite method chaining.
- O objeto final pode variar de acordo com a necessidade.
- É um padrão complexo.

Exemplo em código:

```ts
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

const personBuilder = new PersonBuilder();

// person1 = { name: 'Taiury', age: 21 }
const person1 = personBuilder.setName("Taiury").setAge(21).result;

personBuilder.newPerson(); // clear personBuilder

// person2 = { name: 'Isa', age: 23 }
const person2 = personBuilder.setName("Isa").setAge(23).result;
```

O exemplo acima não representa muito bem o padrão Builder, esta sendo usado apenas para fins didáticos, para um exemplo mais realista veja a pasta `Builder`.

``
