import { Calculable } from "./calculable";

export class Max implements Calculable {
  getResult(firstNumber: number, secondNumber: number): number {
    if (firstNumber >= secondNumber) {
      return firstNumber;
    } else {
      return secondNumber;
    }
  }
}
