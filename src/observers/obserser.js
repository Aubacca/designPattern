console.log("****************************");
console.log("*** The Observer Pattern ***");
console.log("****************************");
var Temperatur = /** @class */ (function () {
    function Temperatur() {
        this.temperatur = 0;
        this.observsers = [];
    }
    Temperatur.prototype.registerObserver = function (observer) {
        this.observsers.push(observer);
    };
    Temperatur.prototype.unregisterObserver = function (observer) {
        var possition = this.observsers.indexOf(observer);
        this.observsers.splice(possition, 1);
    };
    Temperatur.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observsers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperatur);
        }
    };
    Temperatur.prototype.setTemperatur = function (newTemp) {
        this.temperatur = newTemp;
        this.notifyObservers();
        console.log("setTemperatur>temperatur: " + this.temperatur + "\u00B0C.\n");
    };
    return Temperatur;
}());
/**
 * This class can display a temperatur in a monitor.
 */
var SwatchTemperaturDisplayer = /** @class */ (function () {
    function SwatchTemperaturDisplayer(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.registerObserver(this);
    }
    SwatchTemperaturDisplayer.prototype.update = function (temperatur) {
        console.log("Swatch>" + this.name + " - new temperatur is " + temperatur + "\u00B0C.");
    };
    return SwatchTemperaturDisplayer;
}());
/**
 * This class can display a temperatur in a monitor.
 */
var MWatchTemperaturDisplayer = /** @class */ (function () {
    function MWatchTemperaturDisplayer(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.registerObserver(this);
    }
    MWatchTemperaturDisplayer.prototype.update = function (temperatur) {
        console.log("M-Watch>" + this.name + " - new temperatur is " + temperatur + "\u00B0C.");
    };
    return MWatchTemperaturDisplayer;
}());
//
// Test cases for observers.
var myTemperatur = new Temperatur();
var popSwatch = new SwatchTemperaturDisplayer("Pop Watch", myTemperatur), chronoWatch = new SwatchTemperaturDisplayer("Chrono Watch", myTemperatur), mWatch = new MWatchTemperaturDisplayer("Gädalä", myTemperatur);
myTemperatur.setTemperatur(23);
setTimeout(function () {
    myTemperatur.setTemperatur(18);
    myTemperatur.unregisterObserver(chronoWatch);
    console.log("*** Chrono Watch unregistered!\n");
}, 1500);
setTimeout(function () {
    myTemperatur.setTemperatur(31);
}, 3200);
