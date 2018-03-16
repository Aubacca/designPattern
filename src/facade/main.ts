import { HouseLight } from "./houses/houseLight";
import { HouseSauna } from "./houses/houseSauna";
import { HouseProtection } from "./houses/houseProtection";
import { HouseFacade } from "./houses/facades/HouseFacade";

console.log("**************************");
console.log("**************************");
console.log("*** The Facade Pattern ***");
console.log("**************************\n");

//
// Test cases for facades.
let myLight = new HouseLight(),
  mySauna = new HouseSauna(),
  myProtection = new HouseProtection(),
  myHouse: HouseFacade;

console.log(`Light on: ${myLight.isRoomLightOn()}`);
console.log(`Sauna heating on: ${mySauna.isHeatingOn()}`);
console.log(`Sauna temperatur is set to: ${mySauna.getTemperatur()}`);
console.log(`Protetion on: ${myProtection.isProtectionOn()}`);

myHouse = new HouseFacade(myLight, mySauna, myProtection);
myHouse.doLog("Init");
myHouse.goToWork();
myHouse.goHome();
myHouse.goBed();
myHouse.wakeUp();
myHouse.doSaturday();
myHouse.goBed();
