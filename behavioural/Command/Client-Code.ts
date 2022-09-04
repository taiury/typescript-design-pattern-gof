import {
  LightIntensityCommand,
  LightPowerCommand,
  SmartHouseApp,
  SmartHouseLight,
} from "./Smart-House";

// Receiver
const bedroomLight = new SmartHouseLight("Luz Quarto");

// Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);
const lightIntensityCommand = new LightIntensityCommand(bedroomLight);

// Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("btn-1", lightPowerCommand);
smartHouseApp.addCommand("btn-2", lightIntensityCommand);

smartHouseApp.executeCommand("btn-1"); // Luz Quarto agora está ON
smartHouseApp.undoCommand("btn-1"); // Luz Quarto agora está OFF

for (let i = 0; i < 3; i++) {
  smartHouseApp.executeCommand("btn-2"); // loop até 53
}
for (let i = 0; i < 4; i++) {
  smartHouseApp.undoCommand("btn-2"); // loop até 49
}
