import { MiniUsbConnectable } from "../miniUsbConnectable";
import { MicroUsbConnectable } from "../microUsbConnectable";
import { UsbConnectable } from "../usbConnectable";

export class UsbAdapter implements MiniUsbConnectable, MicroUsbConnectable {
  constructor(private _UsbDevice: UsbConnectable) {}

  usingMiniUsbConnector(): void {
    console.log("\n>USBtoMiniUSB.usingMiniUsbConnector\n");
    this._UsbDevice.usingUsbConnector();
    console.log("\n<USBtoMiniUSB.usingMiniUsbConnector");
  }

  usingMicroUsbConnector(): void {
    console.log("\n>USBtoMiniUSB.usingMicroUsbConnector\n");
    this._UsbDevice.usingUsbConnector();
    console.log("\n<USBtoMiniUSB.usingMicroUsbConnector");
  }
}
