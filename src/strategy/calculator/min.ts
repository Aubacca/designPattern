import { Calculable } from "./calculable";

export class Min implements Calculable {
  getResult(firstNumber: number, secondNumber: number): number {
    if (firstNumber <= secondNumber) {
      return firstNumber;
    } else {
      return secondNumber;
    }
  }
}
