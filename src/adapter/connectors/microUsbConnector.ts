import { MicroUsbConnectable } from "./microUsbConnectable";

export class MicroUsbConnector implements MicroUsbConnectable {
  usingMicroUsbConnector(): void {
    console.log(
      "* MicroUsbConnector.usingMicroUsbConnector>using micro USB connector!"
    );
  }
}
