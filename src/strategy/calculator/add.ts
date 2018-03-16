import { Calculable } from "./calculable";

export class Add implements Calculable {
  getResult(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }
}
