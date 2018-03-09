console.log("**************************");
console.log("*** The Facade Pattern ***");
console.log("**************************");
// List of classes used in the facade.
var HouseLight = /** @class */ (function () {
    function HouseLight() {
        this.room1LightOn = false;
    }
    HouseLight.prototype.doRoom1LightOn = function (switchOn) {
        this.room1LightOn = switchOn;
    };
    HouseLight.prototype.isRoomLightOn = function () {
        return this.room1LightOn;
    };
    return HouseLight;
}());
var HouseSauna = /** @class */ (function () {
    function HouseSauna() {
        this.heating = false;
        this.temperatur = 55;
    }
    HouseSauna.prototype.setHeating = function (switchOn) {
        this.heating = switchOn;
    };
    HouseSauna.prototype.isHeatingOn = function () {
        return this.heating;
    };
    HouseSauna.prototype.setTemperatur = function (newTemperatur) {
        this.temperatur = newTemperatur;
    };
    HouseSauna.prototype.getTemperatur = function () {
        return this.temperatur;
    };
    return HouseSauna;
}());
var HouseProtection = /** @class */ (function () {
    function HouseProtection() {
        this.protection = true;
    }
    HouseProtection.prototype.setProtection = function (switchOn) {
        this.protection = switchOn;
    };
    HouseProtection.prototype.isProtectionOn = function () {
        return this.protection;
    };
    return HouseProtection;
}());
// Facade definition.
var HouseFacade = /** @class */ (function () {
    function HouseFacade(houseLigth, houseSauna, houseProtection) {
        this.houseLigth = houseLigth;
        this.houseSauna = houseSauna;
        this.houseProtection = houseProtection;
    }
    HouseFacade.prototype.goToWork = function () {
        this.houseLigth.doRoom1LightOn(false);
        this.houseSauna.setHeating(false);
        this.houseProtection.setProtection(true);
        this.doLog("Going to work");
    };
    HouseFacade.prototype.goHome = function () {
        this.houseProtection.setProtection(false);
        this.houseLigth.doRoom1LightOn(true);
        this.doLog("Coming Home");
    };
    HouseFacade.prototype.doSaturday = function () {
        if (this.houseProtection.isProtectionOn()) {
            this.houseProtection.setProtection(false);
        }
        this.houseLigth.doRoom1LightOn(true);
        this.houseSauna.setHeating(true);
        this.houseSauna.setTemperatur(62);
        this.doLog("It is Saturday");
    };
    HouseFacade.prototype.goBed = function () {
        this.houseLigth.doRoom1LightOn(false);
        this.houseSauna.setHeating(false);
        this.houseProtection.setProtection(true);
        this.doLog("Go to bed");
    };
    HouseFacade.prototype.wakeUp = function () {
        this.houseProtection.setProtection(false);
        this.houseLigth.doRoom1LightOn(true);
        this.doLog("Waking up");
    };
    HouseFacade.prototype.doLog = function (action) {
        if (action === void 0) { action = "N/A"; }
        console.log("\n" + action + ":");
        console.log("* Protetion on: " + this.houseProtection.isProtectionOn());
        console.log("* Light on: " + this.houseLigth.isRoomLightOn());
        if (this.houseSauna.isHeatingOn()) {
            console.log("* Sauna temperatur is set to: " + this.houseSauna.getTemperatur());
        }
        else {
            console.log("* Sauna heating on: " + this.houseSauna.isHeatingOn());
        }
    };
    return HouseFacade;
}());
//
// Test cases for facades.
var myLight = new HouseLight(), mySauna = new HouseSauna(), myProtection = new HouseProtection(), myHouse;
console.log("Light on: " + myLight.isRoomLightOn());
console.log("Sauna heating on: " + mySauna.isHeatingOn());
console.log("Sauna temperatur is set to: " + mySauna.getTemperatur());
console.log("Protetion on: " + myProtection.isProtectionOn());
myHouse = new HouseFacade(myLight, mySauna, myProtection);
myHouse.doLog("Init");
myHouse.goToWork();
myHouse.goHome();
myHouse.goBed();
myHouse.wakeUp();
myHouse.doSaturday();
myHouse.goBed();
