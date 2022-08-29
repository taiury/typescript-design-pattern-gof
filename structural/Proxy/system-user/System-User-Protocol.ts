export type SystemUserAddressProtocol = { street: string; number: number };

export interface SystemUserProtocol {
  name: string;
  username: string;
  get addresses(): Promise<SystemUserAddressProtocol[]>;
}
