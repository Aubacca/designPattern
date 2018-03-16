import { Temperatur } from "./displayers/temperatur";
import { SwatchTemperaturDisplayer } from "./displayers/swatchTemperaturDisplayer";
import { MWatchTemperaturDisplayer } from "./displayers/mWatchTemperaturDisplayer";

console.log("****************************");
console.log("****************************");
console.log("*** The Observer Pattern ***");
console.log("****************************\n");

//
// Test cases for observers.
let myTemperatur = new Temperatur();
let popSwatch = new SwatchTemperaturDisplayer("Pop Watch", myTemperatur),
  chronoWatch = new SwatchTemperaturDisplayer("Chrono Watch", myTemperatur),
  mWatch = new MWatchTemperaturDisplayer("Gädalä", myTemperatur);

myTemperatur.setTemperatur(23);
setTimeout(function() {
  myTemperatur.setTemperatur(18);
  myTemperatur.unregisterObserver(chronoWatch);
  console.log("*** Chrono Watch unregistered!\n");
}, 1500);
setTimeout(function() {
  myTemperatur.setTemperatur(31);
}, 3200);
