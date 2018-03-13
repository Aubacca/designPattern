import { BicycleOptionDecorator } from "./bicycleOptionDecorator";
import { Bicycle } from "../bicycle";

/**
 * Additional gear box options for a bicycle.
 */
export class BicycleGearboxOption extends BicycleOptionDecorator {
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
