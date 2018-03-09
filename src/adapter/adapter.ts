console.log("***************************");
console.log("*** The Adapter Pattern ***");
console.log("***************************");

// List of classes/interfaces used for the adapter.

interface IUsbConnector {
  usingUsbConnector(): void;
}

interface IMiniUsbConnector {
  usingMiniUsbConnector(): void;
}

interface IMicroUsbConnector {
  usingMicroUsbConnector(): void;
}

class UsbConnector implements IUsbConnector {
  usingUsbConnector(): void {
    console.log("* UsbConnector.usingUsbConnector>using USB connector!");
  }
}

class MiniUsbConnector implements IMiniUsbConnector {
  usingMiniUsbConnector(): void {
    console.log(
      "* MiniUsbConnector.usingMiniUsbConnector>using mini USB connector!"
    );
  }
}

class MicroUsbConnector implements IMicroUsbConnector {
  usingMicroUsbConnector(): void {
    console.log(
      "* MicroUsbConnector.usingMicroUsbConnector>using micro USB connector!"
    );
  }
}

// Adapter definition.
class UsbAdapter implements IMiniUsbConnector, IMicroUsbConnector {
  constructor(private _UsbDevice: IUsbConnector) {}

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

class MiniUsbAdapter implements IUsbConnector, IMicroUsbConnector {
  constructor(private _miniUsbDevice: IMiniUsbConnector) {}

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
