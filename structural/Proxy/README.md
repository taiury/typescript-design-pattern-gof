# Proxy

Proxy é um padrão de projeto que tem a intenção de fornecer um substituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto.

Exemplo em código:

```ts
export interface Subject {
  request(): void;
}

export class RealSubject implements Subjecct {
  request(): void {
    console.log("Algo que meu objeto faz.");
  }
}

export class Proxy implements Subject {
  constructor(private subject: Subject) {}
  request(): void {
    console.log("Meu proxy faz algo");
    this.subject.request(); // Chamada do objeto real.
    console.log("Meu proxy pode fazer outra coisa.");
  }
}
```
