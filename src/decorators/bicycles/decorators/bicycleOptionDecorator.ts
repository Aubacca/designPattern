import { Bicycle } from "../bicycle";

/**
 * Abstract decorator class. Must be implemented by all bicycle options classes.
 */
export abstract class BicycleOptionDecorator extends Bicycle {
  abstract decoratedBicycle: Bicycle;
  public description: string = "";
  public abstract getDescription(): string;
  public abstract getCost(): number;
}
