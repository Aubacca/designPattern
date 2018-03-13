import { WheelerDX } from "./bicycles/wheelerDX";
import { WheelerTX } from "./bicycles/wheelerTX";
import { BicycleColorOptions } from "./bicycles/decorators/bicycleColorOptions";
import { BicycleBreakOption } from "./bicycles/decorators/bicycleBreakOption";
import { BicycleGearboxOption } from "./bicycles/decorators/bicycleGearboxOption";

console.log("*****************************");
console.log("*** The Decorator Pattern ***");
console.log("*****************************");

/**
 * Abstract bicycle class. Must be implemented by all bicyles.
 */
/*
abstract class Bicycle {
  public abstract description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract getCost(): number;
}
*/

/**
 * Sample bicycle Wheeler DX.
 */
/*
class WheelerDX extends Bicycle {
  public description = "Wheeler DX components (500)";

  public getCost(): number {
    return 500;
  }
}

/**
 * Sample bicycle Wheeler TX.
 */
/*
class WheelerTX extends Bicycle {
  public description = "Wheeler TX components (800)";

  public getCost(): number {
    return 800;
  }
}
*/
/**
 * Abstract decorator class. Must be implemented by all bicycle options classes.
 */
/*
abstract class BicycleOptionDecorator extends Bicycle {
  abstract decoratedBicycle: Bicycle;
  public description: string = "";
  public abstract getDescription(): string;
  public abstract getCost(): number;
}
*/

/**
 * Additional color options for a bicycle.
 */
/*
class BicycleColorOptions extends BicycleOptionDecorator {
  decoratedBicycle: Bicycle;

  constructor(public newDecoratedBicycle: Bicycle) {
    super();
    this.decoratedBicycle = newDecoratedBicycle;
  }

  public getDescription(): string {
    return (
      this.decoratedBicycle.getDescription() +
      ", Bicolor perlmut green blueish (120)"
    );
  }
  public getCost(): number {
    return this.decoratedBicycle.getCost() + 120;
  }
}
*/

/**
 * Additional gear box options for a bicycle.
 */
/*
class BicycleGearboxOption extends BicycleOptionDecorator {
  decoratedBicycle: Bicycle;

  constructor(public newDecoratedBicycle: Bicycle) {
    super();
    this.decoratedBicycle = newDecoratedBicycle;
  }

  public getDescription(): string {
    return (
      this.decoratedBicycle.getDescription() + ", hydraulic gear box (240)"
    );
  }
  public getCost(): number {
    return this.decoratedBicycle.getCost() + 240;
  }
}
*/

/**
 * Additional break system options for a bicycle.
 */
/*
class BicycleBreakOption extends BicycleOptionDecorator {
  decoratedBicycle: Bicycle;

  constructor(public newDecoratedBicycle: Bicycle) {
    super();
    this.decoratedBicycle = newDecoratedBicycle;
  }

  public getDescription(): string {
    return this.decoratedBicycle.getDescription() + ", hydraulic breaks (170)";
  }
  public getCost(): number {
    return this.decoratedBicycle.getCost() + 170;
  }
}
*/

//
// Test cases for decorators.
let myDailyBicyle = new WheelerDX();
let myWeekendBicyle = new WheelerTX();
console.log("\nMy daily bicycle w/o options:");
console.log(`* Description: ${myDailyBicyle.getDescription()}`);
console.log(`* Cost: ${myDailyBicyle.getCost()}`);
console.log("My weekend bicycle w/o options:");
console.log(`* Description: ${myWeekendBicyle.getDescription()}`);
console.log(`* Cost: ${myWeekendBicyle.getCost()}`);

//
// Adding options to the bicycle via decorators.
myDailyBicyle = new BicycleColorOptions(myDailyBicyle);
myDailyBicyle = new BicycleBreakOption(myDailyBicyle);
myWeekendBicyle = new BicycleGearboxOption(myWeekendBicyle);
//
// Show description and costs with bicycle options.
console.log("\nMy daily bicycle w/ options:");
console.log(`* Description: ${myDailyBicyle.getDescription()}`);
console.log(`* Cost: ${myDailyBicyle.getCost()}`);
console.log("My weekend bicycle w/ options:");
console.log(`* Description: ${myWeekendBicyle.getDescription()}`);
console.log(`* Cost: ${myWeekendBicyle.getCost()}`);
