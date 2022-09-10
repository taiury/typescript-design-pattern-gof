import { MyDataStructore } from "./My-Data-Structore";
import { MyReverseIterator } from "./My-Reverse-Iterator";

const dataStructore = new MyDataStructore();
dataStructore.addItem("A", "B", "C", "D", "E", "F");

// default iterator
for (const data of dataStructore) {
  console.log(data);
}

console.log("--");
// reverse iterator
dataStructore.changeIterator(new MyReverseIterator(dataStructore));
for (const data of dataStructore) {
  console.log(data);
}
