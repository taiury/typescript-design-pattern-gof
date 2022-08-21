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
