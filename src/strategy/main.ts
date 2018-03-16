import { Calculable } from "./calculator/calculable";
import { Add } from "./calculator/add";
import { Max } from "./calculator/max";
import { Min } from "./calculator/min";
import { Minus } from "./calculator/minus";

console.log("****************************");
console.log("****************************");
console.log("*** The Strategy Pattern ***");
console.log("****************************\n");

//
// Test cases for strategy pattern.
let specialCalculator: Calculable, calculatedResult: number;

specialCalculator = new Add();
calculatedResult = specialCalculator.getResult(10, 20);
console.log(`10 + 20 = ${calculatedResult}`);

specialCalculator = new Max();
calculatedResult = specialCalculator.getResult(27, 28);
console.log(`max: 27 | 28 = ${calculatedResult}`);
calculatedResult = specialCalculator.getResult(28, 27);
console.log(`max: 28 | 27 = ${calculatedResult}`);

specialCalculator = new Min();
calculatedResult = specialCalculator.getResult(27, -100);
console.log(`min: 27 | -100 = ${calculatedResult}`);

specialCalculator = new Minus();
calculatedResult = specialCalculator.getResult(10, 20);
console.log(`10 - 20 = ${calculatedResult}`);
calculatedResult = specialCalculator.getResult(-10, 20);
console.log(`-10 - 20 = ${calculatedResult}`);
calculatedResult = specialCalculator.getResult(100, 20);
console.log(`100 - 20 = ${calculatedResult}`);
