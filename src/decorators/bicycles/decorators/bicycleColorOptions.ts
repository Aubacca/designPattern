import { BicycleOptionDecorator } from "./bicycleOptionDecorator";
import { Bicycle } from "../bicycle";

/**
 * Additional color options for a bicycle.
 */
export class BicycleColorOptions extends BicycleOptionDecorator {
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
