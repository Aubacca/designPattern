import { WheelerDX } from "./bicycles/wheelerDX";
import { WheelerTX } from "./bicycles/wheelerTX";
import { BicycleColorOptions } from "./bicycles/decorators/bicycleColorOptions";
import { BicycleBreakOption } from "./bicycles/decorators/bicycleBreakOption";
import { BicycleGearboxOption } from "./bicycles/decorators/bicycleGearboxOption";

console.log("*****************************");
console.log("*****************************");
console.log("*** The Decorator Pattern ***");
console.log("*****************************\n");

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
