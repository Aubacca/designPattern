"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiniUsbAdapter = /** @class */ (function () {
    function MiniUsbAdapter(_miniUsbDevice) {
        this._miniUsbDevice = _miniUsbDevice;
    }
    MiniUsbAdapter.prototype.usingMicroUsbConnector = function () {
        console.log("\n>MiniUsbAdapter.usingMicroUsbConnector\n");
        this._miniUsbDevice.usingMiniUsbConnector();
        console.log("\n<MiniUsbAdapter.usingMicroUsbConnector");
    };
    MiniUsbAdapter.prototype.usingUsbConnector = function () {
        console.log("\n>MiniUsbAdapter.usingUsbConnector\n");
        this._miniUsbDevice.usingMiniUsbConnector();
        console.log("\n<MiniUsbAdapter.usingUsbConnector");
    };
    return MiniUsbAdapter;
}());
exports.MiniUsbAdapter = MiniUsbAdapter;
