import { UsbConnector } from "./connectors/usbConnector";
import { MiniUsbConnector } from "./connectors/miniUsbConnector";
import { UsbAdapter } from "./connectors/adapters/usbAdapter";
import { MiniUsbAdapter } from "./connectors/adapters/miniUsbAdapter";

console.log("***************************");
console.log("***************************");
console.log("*** The Adapter Pattern ***");
console.log("***************************\n");

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
