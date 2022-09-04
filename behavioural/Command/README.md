# Command

O padrão command encapsula uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas.

```ts
// Receiver
export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  get powerStatus(): string {
    return this.isOn ? "ON" : "OFF";
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está ${this.powerStatus}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} agora está ${this.powerStatus}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    console.log();
    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity < 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}

//  interface Command
export interface SmartHauseCommand {
  execute(): void;
  undo(): void;
}

// Invoker
export class SmartHouseApp {
  private commands: { [key: string]: SmartHauseCommand } = {};

  addCommand(key: string, command: SmartHauseCommand): void {
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}

// Concrete Command
export class LightPowerCommand implements SmartHauseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    this.Light.on();
  }

  undo(): void {
    this.Light.off();
  }
}

// Client Code
// Receiver
const bedroomLight = new SmartHouseLight("Luz Quarto");

// Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("btn-1", lightPowerCommand);

smartHouseApp.executeCommand("btn-1"); // Luz Quarto agora está ON
smartHouseApp.undoCommand("btn-1"); // Luz Quarto agora está OFF
```
