console.log("***************************");
console.log("*** The Adapter Pattern ***");
console.log("***************************");
var UsbConnector = /** @class */ (function () {
    function UsbConnector() {
    }
    UsbConnector.prototype.usingUsbConnector = function () {
        console.log("* UsbConnector.usingUsbConnector>using USB connector!");
    };
    return UsbConnector;
}());
var MiniUsbConnector = /** @class */ (function () {
    function MiniUsbConnector() {
    }
    MiniUsbConnector.prototype.usingMiniUsbConnector = function () {
        console.log("* MiniUsbConnector.usingMiniUsbConnector>using mini USB connector!");
    };
    return MiniUsbConnector;
}());
var MicroUsbConnector = /** @class */ (function () {
    function MicroUsbConnector() {
    }
    MicroUsbConnector.prototype.usingMicroUsbConnector = function () {
        console.log("* MicroUsbConnector.usingMicroUsbConnector>using micro USB connector!");
    };
    return MicroUsbConnector;
}());
// Adapter definition.
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
//
// Test cases for adapter.
var headSet = new UsbConnector(), samsungHandy = new MiniUsbConnector(), memoryStic = new UsbConnector(), usbAdapter = new UsbAdapter(headSet), miniUsbAdapter = new MiniUsbAdapter(samsungHandy);
usbAdapter.usingMiniUsbConnector();
miniUsbAdapter.usingMicroUsbConnector();
setTimeout(function () {
    usbAdapter.usingMicroUsbConnector();
    miniUsbAdapter.usingUsbConnector();
}, 1800);
