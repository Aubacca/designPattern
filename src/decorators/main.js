"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wheelerDX_1 = require("./bicycles/wheelerDX");
var wheelerTX_1 = require("./bicycles/wheelerTX");
var bicycleColorOptions_1 = require("./bicycles/decorators/bicycleColorOptions");
var bicycleBreakOption_1 = require("./bicycles/decorators/bicycleBreakOption");
var bicycleGearboxOption_1 = require("./bicycles/decorators/bicycleGearboxOption");
console.log("*****************************");
console.log("*****************************");
console.log("*** The Decorator Pattern ***");
console.log("*****************************\n");
//
// Test cases for decorators.
var myDailyBicyle = new wheelerDX_1.WheelerDX();
var myWeekendBicyle = new wheelerTX_1.WheelerTX();
console.log("\nMy daily bicycle w/o options:");
console.log("* Description: " + myDailyBicyle.getDescription());
console.log("* Cost: " + myDailyBicyle.getCost());
console.log("My weekend bicycle w/o options:");
console.log("* Description: " + myWeekendBicyle.getDescription());
console.log("* Cost: " + myWeekendBicyle.getCost());
//
// Adding options to the bicycle via decorators.
myDailyBicyle = new bicycleColorOptions_1.BicycleColorOptions(myDailyBicyle);
myDailyBicyle = new bicycleBreakOption_1.BicycleBreakOption(myDailyBicyle);
myWeekendBicyle = new bicycleGearboxOption_1.BicycleGearboxOption(myWeekendBicyle);
//
// Show description and costs with bicycle options.
console.log("\nMy daily bicycle w/ options:");
console.log("* Description: " + myDailyBicyle.getDescription());
console.log("* Cost: " + myDailyBicyle.getCost());
console.log("My weekend bicycle w/ options:");
console.log("* Description: " + myWeekendBicyle.getDescription());
console.log("* Cost: " + myWeekendBicyle.getCost());
