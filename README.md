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

- Abstract Factory - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas, [veja um exemplo aqui](./creational/Abstract-Factory/README.md).

- Builder - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações, [veja um exemplo aqui](./creational/Builder/README.md).

- Factory Method - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses, [veja um exemplo aqui](./creational/Factory-Method/README.md).

- Prototype - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo, [veja um exemplo aqui](./creational/Prototype/README.md).

- Singleton - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela, [veja um exemplo aqui](./creational/Singleton/README.md).

## Padrões de projeto estruturais

- Adapter - converte a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossível por causa de suas interfaces incompatíveis, [veja um exemplo aqui](./structural/Adapter/README.md).

- Bridge - separa uma abstração da sua implementação, de modo que as duas possam variar independentemente, [veja um exemplo aqui](./structural/Bridge/README.md).

- Composite - compor objetos em estruturas de árvore para representarem hierarquias partes/todo. Composite permite aos cliente tratarem de maneira uniforme objetos individuais e composições de objetos, [veja um exemplo aqui](./structural/Composite/README.md).

- Decorator - atribui responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível à subclasses para extensão da funcionalidade, [veja um exemplo aqui](./structural/Decorator/README.md).

- Façade - fornece uma interface unifica para um conjunto de interfaces em um subsistema. O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.

- Flyweight - usa compartilhamento para suportar grandes quantidades de objetos de granularidade fina, de maneira eficiente.

- Proxy - fornece um objeto representante (surrogate), ou um marcador de outro objeto para controlar o acesso ao mesmo.
