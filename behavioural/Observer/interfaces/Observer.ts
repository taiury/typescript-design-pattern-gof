export interface Observer {
  update(...args: unknown[]): void;
}
