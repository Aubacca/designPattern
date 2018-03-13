import { Bicycle } from "./bicycle";

export class WheelerDX extends Bicycle {
  public description = "Wheeler DX components (500)";

  public getCost(): number {
    return 500;
  }
}
