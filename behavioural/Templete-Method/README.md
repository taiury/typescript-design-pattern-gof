# Template method

O padrão template method define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.

Exemplo em código:

```ts
export abstract class TemplateMethodBaseClass {
  // Este é o template method (final)
  readonly templateMethod = (): void => {
    this.stepA();
    this.hook();
    this.stepB();
  };
  // As classes concretas devem definir
  abstract stepA(): void;
  abstract stepB(): void;
  // As classes concretas podem usar
  hook(): void {}
}

export class ConcreteTemplateMethod extends TemplateMethodBaseClass {
  stepA(): void {
    console.log("A - stepA");
  }

  stepB(): void {
    console.log("A - stepB");
  }

  hook(): void {
    console.log("A - Hook used");
  }
}

// client code
const concrete = new ConcreteTemplateMethod();
concrete.templateMethod();
```
