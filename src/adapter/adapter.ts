import { UsbConnector } from "./usbConnector";
import { MiniUsbConnector } from "./miniUsbConnector";
import { UsbAdapter } from "./usbAdapter";
import { MiniUsbAdapter } from "./miniUsbAdapter";

console.log("***************************");
console.log("*** The Adapter Pattern ***");
console.log("***************************");

//
// Test cases for adapter.
let headSet = new UsbConnector(),
  samsungHandy = new MiniUsbConnector(),
  memoryStic = new UsbConnector(),
  usbAdapter = new UsbAdapter(headSet),
  miniUsbAdapter = new MiniUsbAdapter(samsungHandy);

usbAdapter.usingMiniUsbConnector();
miniUsbAdapter.usingMicroUsbConnector();

setTimeout(function() {
  usbAdapter.usingMicroUsbConnector();
  miniUsbAdapter.usingUsbConnector();
}, 1800);
