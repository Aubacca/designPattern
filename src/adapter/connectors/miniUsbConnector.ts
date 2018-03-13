import { MiniUsbConnectable } from "./miniUsbConnectable";

export class MiniUsbConnector implements MiniUsbConnectable {
  usingMiniUsbConnector(): void {
    console.log(
      "* MiniUsbConnector.usingMiniUsbConnector>using mini USB connector!"
    );
  }
}
