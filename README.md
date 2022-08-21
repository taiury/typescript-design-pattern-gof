# Estudando design pattern com typescript

## ![alt text](./assets/dev.png)

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
