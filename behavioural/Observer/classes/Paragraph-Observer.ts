import { Observable } from "../interfaces/Observable";
import { Observer } from "../interfaces/Observer";
import { InputObservable } from "./Input-Observable";

export class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  }
}
