import { MyDefaultInterator } from "./My-Default-Iterator";
import { MyIteratorProtocol } from "./My-Iterator-Protocol";

export class MyDataStructore {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultInterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this._items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this._items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    this.iterator.reset();
    return this.iterator;
  }
}
