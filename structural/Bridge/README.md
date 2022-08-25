# Bridge

Bridge é um padão de projeto estrutural que tem a interção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

(GOF pág.208) A diferença chave entre esses padrões está nas suas internções... O padrão adapter faz as coisas funcionarem APÓS elas terem sido projetadas; o Bridge as faz funcionar ANTES QUE existam...

Exemplo em código:

```ts
export interface DeviceImplementation {
  get name(): string;
  get power(): boolean;
  get volume(): number;
  set power(powerStatus: boolean);
  set volume(volume: number);
}

export class Tv implements DeviceImplementation {
  private _volume: number = 10;
  private _power: boolean = false;
  private _name: string = "TV";

  get name(): string {
    return this._name;
  }

  set power(powerStatus: boolean) {
    this._power = powerStatus;
  }

  get power(): boolean {
    return this._power;
  }

  set volume(volume: number) {
    if (this._volume < 0) return;
    if (this._volume > 100) return;

    this._volume = volume;
  }

  get volume(): number {
    return this._volume;
  }
}

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.power = !this.device.power;
    console.log(`${this.device.name} power status: ${this.device.power}`);
  }
}

export function clientCode(abstraction: RemoteControl): void {
  abstraction.togglePower(); // true
}

const tv = new Tv();
const tvRemoteControl = new RemoteControl(tv);

// tv
clientCode(tvRemoteControl);
```
