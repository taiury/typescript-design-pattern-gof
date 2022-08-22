# Estudando design patterns com typescript

[![alt text](https://blog.rocketseat.com.br/content/images/size/w2000/2019/03/5_ferramentas_em_alta_para_desenvolvedores_React.png "Link para o site de onde a arte saiu :)")](https://blog.rocketseat.com.br/5-ferramentas-em-alta-react/)

---

## Objetivo

O objetivo desse repositório é passar por alguns padrões de projeto do livro GOF usando a linguagem typescript.

---

## Instalando dependências

Após baixar o Repositório em seu computador use o comando `yarn install` ou `npm install` dentro da pasta para instalar as dependencias.

Eu estou usando o editor de texto `vscode` e um plugin chamado `code runner` para executar o código de forma independente.

---

## Padrões de projeto de criação

### Singleton

A proposta do singleton é manter somente uma instância de alguma coisa no nosso projeto, geralmente usado para recursos compartilhados, como por exemplo: acesso a base de dados, interfaces gráficas, sistemas de arquivos, servidores de impressão, logger e mais.

Exemplo em código:

```ts
export class Singleton {
  private static _instance?: Singleton;

  private constructor() {
    // new not allowed outside the class
  }

  static get instance(): Singleton {
    if (Singleton._instance === undefined) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}
const instance1 = Singleton.instance;
const instance2 = Singleton.instance;

console.log(instance1 === instance2); // true
```

### Builder

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

### Prototype

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
```

### Factory method

```ts
type Car = { model: string; engine: string };
type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
  showDetails(): void {
    console.log(this);
  },
};

const carFactory = (model: string, engine: string): Car & CarPrototype => {
  const idAsAPrivateMember = Math.floor(Math.random() * 1000);
  const carObj = Object.create(carPrototype);
  return Object.assign(carObj, { id: idAsAPrivateMember, model, engine });
};

const car1 = carFactory("Celta", "1.0 EFI");
car1.showDetails(); // { id: random, model: 'Celta', engine: '1.0 EFI' }

const car2 = carFactory("Fusca", "1.6L F4");
car2.showDetails(); // { id: random, model: 'Fusca', engine: '1.6L F4' }
```
