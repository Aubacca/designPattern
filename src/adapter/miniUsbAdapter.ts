import { MicroUsbConnectable } from "./microUsbConnectable";
import { UsbConnectable } from "./usbConnectable";
import { MiniUsbConnectable } from "./miniUsbConnectable";

export class MiniUsbAdapter implements UsbConnectable, MicroUsbConnectable {
  constructor(private _miniUsbDevice: MiniUsbConnectable) {}

  usingMicroUsbConnector(): void {
    console.log("\n>MiniUsbAdapter.usingMicroUsbConnector\n");
    this._miniUsbDevice.usingMiniUsbConnector();
    console.log("\n<MiniUsbAdapter.usingMicroUsbConnector");
  }

  usingUsbConnector(): void {
    console.log("\n>MiniUsbAdapter.usingUsbConnector\n");
    this._miniUsbDevice.usingMiniUsbConnector();
    console.log("\n<MiniUsbAdapter.usingUsbConnector");
  }
}
