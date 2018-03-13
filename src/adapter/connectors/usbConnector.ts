import { UsbConnectable } from "./usbConnectable";

export class UsbConnector implements UsbConnectable {
  usingUsbConnector(): void {
    console.log("* UsbConnector.usingUsbConnector>using USB connector!");
  }
}
