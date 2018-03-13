"use strict";
exports.__esModule = true;
var usbConnector_1 = require("./connectors/usbConnector");
var miniUsbConnector_1 = require("./connectors/miniUsbConnector");
var usbAdapter_1 = require("./connectors/adapters/usbAdapter");
var miniUsbAdapter_1 = require("./connectors/adapters/miniUsbAdapter");
console.log("***************************");
console.log("*** The Adapter Pattern ***");
console.log("***************************");
//
// Test cases for adapter.
var headSet = new usbConnector_1.UsbConnector(), samsungHandy = new miniUsbConnector_1.MiniUsbConnector(), memoryStic = new usbConnector_1.UsbConnector(), usbAdapter = new usbAdapter_1.UsbAdapter(headSet), miniUsbAdapter = new miniUsbAdapter_1.MiniUsbAdapter(samsungHandy);
usbAdapter.usingMiniUsbConnector();
miniUsbAdapter.usingMicroUsbConnector();
setTimeout(function () {
    usbAdapter.usingMicroUsbConnector();
    miniUsbAdapter.usingUsbConnector();
}, 1800);
