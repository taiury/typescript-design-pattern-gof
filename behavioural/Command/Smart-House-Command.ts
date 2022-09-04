export interface SmartHauseCommand {
  execute(): void;
  undo(): void;
}
