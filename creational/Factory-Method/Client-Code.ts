import { randomCarAlgorithm } from "./main/Random-Vehicle-Algorithm";
import { randNum } from "./utils/random-numbers";

const customerNames = ["Taiury", "Isa", "Rafael", "João", "Helena"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randNum(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log("---");
}
