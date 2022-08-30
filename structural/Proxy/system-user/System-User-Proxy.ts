import { AdminUser } from "./Admin-User";
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from "./System-User-Protocol";

export class SystemUserProxy implements SystemUserProtocol {
  private realUser?: SystemUserProtocol;
  private realUserAddresses?: SystemUserAddressProtocol[];

  constructor(public name: string, public username: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === undefined) {
      this.realUser = new AdminUser(this.name, this.username);
    }

    return this.realUser;
  }
  get addresses(): Promise<SystemUserAddressProtocol[]> {
    return (async () => {
      this.realUser = this.createUser();

      if (this.realUserAddresses === undefined) {
        this.realUserAddresses = await this.realUser.addresses;
      }

      return this.realUserAddresses;
    })();
  }
}
