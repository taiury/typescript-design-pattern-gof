import { SmartHauseCommand } from "./commands";

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
