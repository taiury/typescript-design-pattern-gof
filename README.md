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

- Abstract Factory - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas, [veja um exemplo aqui](./creational/Abstract-Factory).

- Builder - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações, [veja um exemplo aqui](./creational/Builder).

- Factory Method - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses, [veja um exemplo aqui](./creational/Factory-Method).

- Prototype - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo, [veja um exemplo aqui](./creational/Prototype).

- Singleton - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela, [veja um exemplo aqui](./creational/Singleton).

## Padrões de projeto estruturais

- Adapter - converte a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossível por causa de suas interfaces incompatíveis, [veja um exemplo aqui](./structural/Adapter).

- Bridge - separa uma abstração da sua implementação, de modo que as duas possam variar independentemente, [veja um exemplo aqui](./structural/Bridge).

- Composite - compor objetos em estruturas de árvore para representarem hierarquias partes/todo. Composite permite aos cliente tratarem de maneira uniforme objetos individuais e composições de objetos, [veja um exemplo aqui](./structural/Composite).

- Decorator - atribui responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível à subclasses para extensão da funcionalidade, [veja um exemplo aqui](./structural/Decorator).

- Façade - fornece uma interface unifica para um conjunto de interfaces em um subsistema. O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar, [veja um exemplo aqui](./structural/Facade).

- Flyweight - usa compartilhamento para suportar grandes quantidades de objetos de granularidade fina, de maneira eficiente, [veja um exemplo aqui](./structural/Flyweight).

- Proxy - fornece um objeto representante (surrogate), ou um marcador de outro objeto para controlar o acesso ao mesmo, [veja um exemplo aqui](./structural/Proxy).

## Padrões de projeto comportamentais

- Chain of responsibility - evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate, [veja um exemplo aqui](./behavioural/Chain-Of-Reponsibility).

- Command - encapsula uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas, [veja um exemplo aqui](./behavioural/Command).

- Interpreter - dada uma linguagem, define um representação para sua gramática juntamente com um interpretador que usa a representação para interpretar sentenças nesta linguagem.

- Iterator - fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente, [veja um exemplo aqui](./behavioural/Iterator).

- Mediator - define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações independentemente, [veja um exemplo aqui](./behavioural/Mediator).

- Memento - sem violar a encapsulação, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado, [veja um exemplo aqui](./behavioural/Memento).

- Observer - define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados, [veja um exemplo aqui](./behavioural/Observer).
- State - permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe, [veja um exemplo aqui](./behavioural/State).

- Strategy - Define uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam, [veja um exemplo aqui](./behavioural/Strategy).

- Template method - define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura, [veja um exemplo aqui](./behavioural/Templete-Method).

- Visitor - representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que você defina uma nova operação sem mudar as classes dos elementos sobre os quais opera.
