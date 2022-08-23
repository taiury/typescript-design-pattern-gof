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

- Abstract Factory - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas, [veja um exemplo aqui](./Abstract-Factory/README.md).

- Builder - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações, [veja um exemplo aqui](./Builder/README.md).

- Factory Method - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses, [veja um exemplo aqui](./Factory-Method/README.md).

- Prototype - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo, [veja um exemplo aqui](./Prototype/README.md).

- Singleton - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela, [veja um exemplo aqui](./Singleton/README.md).
