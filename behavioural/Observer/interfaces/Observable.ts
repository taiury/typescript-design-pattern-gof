import { Observer } from "./Observer";

// interface Observable
export interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}
