import { Calculable } from "./calculable";

export class Minus implements Calculable {
  getResult(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }
}
