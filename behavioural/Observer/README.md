# Observer

O padrão observer define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados.

Exemplo em código:

```ts
// interface Observable
export interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

// interface Observer
export interface Observer {
  update(...args: unknown[]): void;
}

// Concrete Observable
export class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}
  subscribe(...observer: Observer[]): void {
    observer.forEach((observer) => {
      if (!this.observers.includes(observer)) {
        this.observers.push(observer);
      }
    });
  }
  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Concrete Observer
export class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}

// client code
export function makeInput(): HTMLInputElement {
  const input = document.createElement("input");
  document.body.appendChild(input);
  return input;
}

export function makeParagraph(): HTMLParagraphElement {
  const paragraph = document.createElement("p");
  document.body.appendChild(paragraph);
  paragraph.innerText = "Text inicial (Hardcoded)";
  return paragraph;
}

const input = new InputObservable(makeInput());
const paragraph = new ParagraphObserver(makeParagraph());
const paragraph2 = new ParagraphObserver(makeParagraph());
const paragraph3 = new ParagraphObserver(makeParagraph());
input.subscribe(paragraph, paragraph2, paragraph3);

input.element.addEventListener("keyup", () => {
  input.notify();
});

input.unsubscribe(paragraph2);
```
