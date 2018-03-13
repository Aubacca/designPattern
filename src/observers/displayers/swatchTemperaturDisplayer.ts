import { Observable } from "./observable";
import { Subjectable } from "./subjectable";

/**
 * This class can display a temperatur in a monitor.
 */
export class SwatchTemperaturDisplayer implements Observable {
  constructor(private name: string, private subject: Subjectable) {
    this.subject.registerObserver(this);
  }

  update(temperatur: number): void {
    console.log(`Swatch>${this.name} - new temperatur is ${temperatur}°C.`);
  }
}
