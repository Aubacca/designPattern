import { Subjectable } from "./subjectable";
import { Observable } from "./observable";

export class Temperatur implements Subjectable {
  private temperatur = 0;
  private observsers: Observable[] = [];

  registerObserver(observer: Observable): void {
    this.observsers.push(observer);
  }

  unregisterObserver(observer: Observable): void {
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
