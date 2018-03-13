/**
 * Abstract bicycle class. Must be implemented by all bicyles.
 */
export abstract class Bicycle {
  public abstract description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract getCost(): number;
}
