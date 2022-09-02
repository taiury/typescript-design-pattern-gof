# Flyweight

O padrão flyweight é um padrão de projeto estrutural que tem a intenção de usar compartilhamento para suportar eficientemente grandes quantidades de objetos de forma granular.

Exemplo em codigo:

```ts
// interface flyweight
export interface DeliveryFlyweight {
  deliver(name: string, number: string): void;
}

// types
export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };

// Flyweight
export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}
  deliver(name: string, number: string): void {
    console.log("Entrega para %s", name);
    console.log("Em", this.intrinsicState.street, this.intrinsicState.city);
    console.log("Número", number);
    console.log("###");
  }
}

// Flyweight factory
export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, "").toLocaleLowerCase())
      .join("_");
  }

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getlocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}

// Context
export const deliveryContext = function (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string
): void {
  const location = factory.makeLocation({ street, city });
  location.deliver(name, number);
};

const factory = new DeliveryFactory();
deliveryContext(factory, "Taiury", "20A", "Av Brasil", "SP");
deliveryContext(factory, "Helena", "20A", "Av Brasil", "SP");
deliveryContext(factory, "Luiz", "502", "Av Brasil", "SP");
deliveryContext(factory, "Gabriel", "4C", "Rua A", "MG");
deliveryContext(factory, "Isa", "4C", "Rua B", "MG");

console.log();
console.log(factory.getlocations());
// returned by getlocations
// {
//   avbrasil_sp: DeliveryLocation {
//     intrinsicState: { street: 'Av Brasil', city: 'SP' }
//   },
//   ruaa_mg: DeliveryLocation { intrinsicState: { street: 'Rua A', city: 'MG' } },
//   ruab_mg: DeliveryLocation { intrinsicState: { street: 'Rua B', city: 'MG' } }
// }
```
