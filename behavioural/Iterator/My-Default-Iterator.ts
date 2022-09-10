import { MyDataStructore } from "./My-Data-Structore";
import { MyIteratorProtocol } from "./My-Iterator-Protocol";

export class MyDefaultInterator implements MyIteratorProtocol<string> {
  private index = 0;

  constructor(private readonly dataStructore: MyDataStructore) {}

  reset(): void {
    this.index = 0;
  }
  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructore.items[this.index]);
    returnValue.done = this.index >= this.dataStructore.size();
    this.index++;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
