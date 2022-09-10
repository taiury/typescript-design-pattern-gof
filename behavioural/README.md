# Padrões de projeto comportamentais

- Chain of responsibility - evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate, [veja um exemplo aqui](./Chain-Of-Responsibility).

- Command - encapsula uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas, [veja um exemplo aqui](./Command).

- Interpreter - dada uma linguagem, define um representação para sua gramática juntamente com um interpretador que usa a representação para interpretar sentenças nesta linguagem.

- Iterator - fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente, [veja um exemplo aqui](./Iterator).

- Mediator - define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações independentemente, [veja um exemplo aqui](./Mediator).

- Memento - sem violar a encapsulação, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado, [veja um exemplo aqui](./Memento).

- Observer - define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados, [veja um exemplo aqui](./Observer).
- State - permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe, [veja um exemplo aqui](./State).

- Strategy - Define uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam, [veja um exemplo aqui](./Strategy).

- Template method - define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura, [veja um exemplo aqui](./Templete-Method).

- Visitor - representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que você defina uma nova operação sem mudar as classes dos elementos sobre os quais opera, [veja um exemplo aqui](./Visitor).
