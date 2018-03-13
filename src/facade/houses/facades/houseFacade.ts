import { HouseLight } from "../houseLight";
import { HouseSauna } from "../houseSauna";
import { HouseProtection } from "../houseProtection";

export class HouseFacade {
  constructor(
    private houseLigth: HouseLight,
    private houseSauna: HouseSauna,
    private houseProtection: HouseProtection
  ) {}

  public goToWork(): void {
    this.houseLigth.doRoom1LightOn(false);
    this.houseSauna.setHeating(false);
    this.houseProtection.setProtection(true);
    this.doLog("Going to work");
  }

  public goHome(): void {
    this.houseProtection.setProtection(false);
    this.houseLigth.doRoom1LightOn(true);
    this.doLog("Coming Home");
  }

  public doSaturday(): void {
    if (this.houseProtection.isProtectionOn()) {
      this.houseProtection.setProtection(false);
    }
    this.houseLigth.doRoom1LightOn(true);
    this.houseSauna.setHeating(true);
    this.houseSauna.setTemperatur(62);
    this.doLog("It is Saturday");
  }

  public goBed(): void {
    this.houseLigth.doRoom1LightOn(false);
    this.houseSauna.setHeating(false);
    this.houseProtection.setProtection(true);
    this.doLog("Go to bed");
  }

  public wakeUp(): void {
    this.houseProtection.setProtection(false);
    this.houseLigth.doRoom1LightOn(true);
    this.doLog("Waking up");
  }

  public doLog(action: string = "N/A"): void {
    console.log(`**************************\n${action}:`);
    console.log(`* Protetion on: ${this.houseProtection.isProtectionOn()}`);
    console.log(`* Light on: ${this.houseLigth.isRoomLightOn()}`);
    if (this.houseSauna.isHeatingOn()) {
      console.log(
        `* Sauna temperatur is set to: ${this.houseSauna.getTemperatur()}`
      );
    } else {
      console.log(`* Sauna heating on: ${this.houseSauna.isHeatingOn()}`);
    }
  }
}
