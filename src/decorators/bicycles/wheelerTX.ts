import { Bicycle } from "./bicycle";

/**
 * Sample bicycle Wheeler TX.
 */
export class WheelerTX extends Bicycle {
  public description = "Wheeler TX components (800)";

  public getCost(): number {
    return 800;
  }
}
