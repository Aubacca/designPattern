import { BicycleOptionDecorator } from "./bicycleOptionDecorator";
import { Bicycle } from "../bicycle";

/**
 * Additional break system options for a bicycle.
 */
export class BicycleBreakOption extends BicycleOptionDecorator {
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
