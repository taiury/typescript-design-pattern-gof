import { InputObservable } from "./classes/Input-Observable";
import { ParagraphObserver } from "./classes/Paragraph-Observer";

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
