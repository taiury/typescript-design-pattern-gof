export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}
  clone(): this {
    const newPerson = Object.create(this);
    return newPerson;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}
