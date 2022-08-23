# Factory method

O objetivo do factory method é definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O factory method permite adiar a instanciação para as subclasses.

exemplo em código:

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
