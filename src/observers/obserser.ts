console.log("****************************");
console.log("*** The Observer Pattern ***");
console.log("****************************");

interface ISubject {
  registerObserver(observer: IObserver): void;
  unregisterObserver(observer: IObserver): void;
  notifyObservers(): void;
}

interface IObserver {
  update(temperatur: number): void;
}

class Temperatur implements ISubject {
  private temperatur = 0;
  private observsers: IObserver[] = [];

  registerObserver(observer: IObserver): void {
    this.observsers.push(observer);
  }

  unregisterObserver(observer: IObserver): void {
    let possition = this.observsers.indexOf(observer);
    this.observsers.splice(possition, 1);
  }

  notifyObservers(): void {
    for (let observer of this.observsers) {
      observer.update(this.temperatur);
    }
  }

  setTemperatur(newTemp: number): void {
    this.temperatur = newTemp;
    this.notifyObservers();
    console.log(`setTemperatur>temperatur: ${this.temperatur}°C.\n`);
  }
}

/**
 * This class can display a temperatur in a monitor.
 */
class SwatchTemperaturDisplayer implements IObserver {
  constructor(private name: string, private subject: ISubject) {
    this.subject.registerObserver(this);
  }

  update(temperatur: number): void {
    console.log(`Swatch>${this.name} - new temperatur is ${temperatur}°C.`);
  }
}

/**
 * This class can display a temperatur in a monitor.
 */
class MWatchTemperaturDisplayer implements IObserver {
  constructor(private name: string, private subject: ISubject) {
    this.subject.registerObserver(this);
  }

  update(temperatur: number): void {
    console.log(`M-Watch>${this.name} - new temperatur is ${temperatur}°C.`);
  }
}

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
