export interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    const newAddress = new Address(this.street, this.number);
    return newAddress;
  }
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}
  clone(): Person {
    const newPerson = new Person(this.name, this.age);
    newPerson.addresses = this.addresses.map((item) => item.clone());
    return newPerson;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}
