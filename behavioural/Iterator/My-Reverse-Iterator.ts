import { MyDataStructore } from "./My-Data-Structore";
import { MyIteratorProtocol } from "./My-Iterator-Protocol";

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private index = this.dataStructore.size();

  constructor(private readonly dataStructore: MyDataStructore) {}

  reset(): void {
    this.index = this.dataStructore.size();
  }
  next(): IteratorResult<string> {
    this.index--;
    const returnValue = this.makeValue(this.dataStructore.items[this.index]);
    returnValue.done = this.index < 0;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
