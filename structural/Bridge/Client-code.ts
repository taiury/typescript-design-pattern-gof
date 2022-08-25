import { Radio, Tv } from "./Device";
import { RemoteControl, RemoteControlWithVolume } from "./Remote-Control";

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume
): void {
  abstraction.togglePower(); // true

  //Type Guard
  if (!("volumeUp" in abstraction)) return;

  abstraction.volumeUp(); // 11
  abstraction.volumeUp(); // 12
  abstraction.volumeUp(); // 13
  abstraction.volumeDown(); // 12
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlWithVolume(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

// radio
clientCode(radioRemoteControl);

console.log("------------------");

// tv
clientCode(tvRemoteControl);
