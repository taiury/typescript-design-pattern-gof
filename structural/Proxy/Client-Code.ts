import { SystemUserProxy } from "./system-user/System-User-Proxy";

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy("Taiury", "taiury");
  console.log("isso vai levar 2 segundos");
  console.log(await user.addresses);
  console.log("isso vai se repetir (CACHE)");

  for (let i = 0; i < 5; i++) {
    console.log(await user.addresses);
  }
}

clientCode();
