console.log("**************************");
console.log("*** The Facade Pattern ***");
console.log("**************************");

class HouseLight {
  private room1LightOn: boolean = false;

  public doRoom1LightOn(switchOn: boolean) {
    this.room1LightOn = switchOn;
  }

  public isRoomLightOn(): boolean {
    return this.room1LightOn;
  }
}

class HouseSauna {
  private heating: boolean = false;
  private temperatur: number = 55;

  public setHeating(switchOn: boolean): void {
    this.heating = switchOn;
  }

  public isHeatingOn(): boolean {
    return this.heating;
  }

  public setTemperatur(newTemperatur: number): void {
    this.temperatur = newTemperatur;
  }

  public getTemperatur(): number {
    return this.temperatur;
  }
}

class HouseProtection {
  private protection: boolean = true;

  public setProtection(switchOn: boolean) {
    this.protection = switchOn;
  }

  public isProtectionOn(): boolean {
    return this.protection;
  }
}

// Facade definition
class HouseFacade {
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
    console.log(`\n${action}:`);
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
