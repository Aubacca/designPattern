"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsbAdapter = /** @class */ (function () {
    function UsbAdapter(_UsbDevice) {
        this._UsbDevice = _UsbDevice;
    }
    UsbAdapter.prototype.usingMiniUsbConnector = function () {
        console.log("\n>USBtoMiniUSB.usingMiniUsbConnector\n");
        this._UsbDevice.usingUsbConnector();
        console.log("\n<USBtoMiniUSB.usingMiniUsbConnector");
    };
    UsbAdapter.prototype.usingMicroUsbConnector = function () {
        console.log("\n>USBtoMiniUSB.usingMicroUsbConnector\n");
        this._UsbDevice.usingUsbConnector();
        console.log("\n<USBtoMiniUSB.usingMicroUsbConnector");
    };
    return UsbAdapter;
}());
exports.UsbAdapter = UsbAdapter;
