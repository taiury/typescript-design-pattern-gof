import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from "./System-User-Protocol";

export class AdminUser implements SystemUserProtocol {
  constructor(public name: string, public username: string) {}

  get addresses(): Promise<SystemUserAddressProtocol[]> {
    return (async () => {
      return new Promise((resolve) => {
        return setTimeout(() => {
          return resolve([
            { street: "Av. Brasil", number: 50 },
            { street: "Rua A.", number: 40 },
          ]);
        }, 2000);
      });
    })();
  }
}
