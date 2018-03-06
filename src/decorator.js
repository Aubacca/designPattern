var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("*****************************");
console.log("*** The Decorator Pattern ***");
console.log("*****************************");
/**
 * Abstract bicycle class. Must be implemented by all bicyles.
 */
var Bicycle = /** @class */ (function () {
    function Bicycle() {
    }
    Bicycle.prototype.getDescription = function () {
        return this.description;
    };
    return Bicycle;
}());
/**
 * Sample bicycle Wheeler DX.
 */
var WheelerDX = /** @class */ (function (_super) {
    __extends(WheelerDX, _super);
    function WheelerDX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Wheeler DX components (500)";
        return _this;
    }
    WheelerDX.prototype.getCost = function () {
        return 500;
    };
    return WheelerDX;
}(Bicycle));
/**
 * Sample bicycle Wheeler TX.
 */
var WheelerTX = /** @class */ (function (_super) {
    __extends(WheelerTX, _super);
    function WheelerTX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Wheeler TX components (800)";
        return _this;
    }
    WheelerTX.prototype.getCost = function () {
        return 800;
    };
    return WheelerTX;
}(Bicycle));
/**
 * Abstract decorator class. Must be implemented by all bicycle options classes.
 */
var BicycleOptionDecorator = /** @class */ (function (_super) {
    __extends(BicycleOptionDecorator, _super);
    function BicycleOptionDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "";
        return _this;
    }
    return BicycleOptionDecorator;
}(Bicycle));
/**
 * Additional color options for a bicycle.
 */
var BicycleColorOptions = /** @class */ (function (_super) {
    __extends(BicycleColorOptions, _super);
    function BicycleColorOptions(newDecoratedBicycle) {
        var _this = _super.call(this) || this;
        _this.newDecoratedBicycle = newDecoratedBicycle;
        _this.decoratedBicycle = newDecoratedBicycle;
        return _this;
    }
    BicycleColorOptions.prototype.getDescription = function () {
        return (this.decoratedBicycle.getDescription() +
            ", Bicolor perlmut green blueish (120)");
    };
    BicycleColorOptions.prototype.getCost = function () {
        return this.decoratedBicycle.getCost() + 120;
    };
    return BicycleColorOptions;
}(BicycleOptionDecorator));
/**
 * Additional gear box options for a bicycle.
 */
var BicycleGearboxOption = /** @class */ (function (_super) {
    __extends(BicycleGearboxOption, _super);
    function BicycleGearboxOption(newDecoratedBicycle) {
        var _this = _super.call(this) || this;
        _this.newDecoratedBicycle = newDecoratedBicycle;
        _this.decoratedBicycle = newDecoratedBicycle;
        return _this;
    }
    BicycleGearboxOption.prototype.getDescription = function () {
        return (this.decoratedBicycle.getDescription() + ", hydraulic gear box (240)");
    };
    BicycleGearboxOption.prototype.getCost = function () {
        return this.decoratedBicycle.getCost() + 240;
    };
    return BicycleGearboxOption;
}(BicycleOptionDecorator));
/**
 * Additional break system options for a bicycle.
 */
var BicycleBreakOption = /** @class */ (function (_super) {
    __extends(BicycleBreakOption, _super);
    function BicycleBreakOption(newDecoratedBicycle) {
        var _this = _super.call(this) || this;
        _this.newDecoratedBicycle = newDecoratedBicycle;
        _this.decoratedBicycle = newDecoratedBicycle;
        return _this;
    }
    BicycleBreakOption.prototype.getDescription = function () {
        return this.decoratedBicycle.getDescription() + ", hydraulic breaks (170)";
    };
    BicycleBreakOption.prototype.getCost = function () {
        return this.decoratedBicycle.getCost() + 170;
    };
    return BicycleBreakOption;
}(BicycleOptionDecorator));
//
// Test cases for decorators.
var myDailyBicyle = new WheelerDX();
var myWeekendBicyle = new WheelerTX();
console.log("\nMy daily bicycle w/o options:");
console.log("* Description: " + myDailyBicyle.getDescription());
console.log("* Cost: " + myDailyBicyle.getCost());
console.log("My weekend bicycle w/o options:");
console.log("* Description: " + myWeekendBicyle.getDescription());
console.log("* Cost: " + myWeekendBicyle.getCost());
//
// Adding options to the bicycle via decorators.
myDailyBicyle = new BicycleColorOptions(myDailyBicyle);
myDailyBicyle = new BicycleBreakOption(myDailyBicyle);
myWeekendBicyle = new BicycleGearboxOption(myWeekendBicyle);
//
// Show description and costs with bicycle options.
console.log("\nMy daily bicycle w/ options:");
console.log("* Description: " + myDailyBicyle.getDescription());
console.log("* Cost: " + myDailyBicyle.getCost());
console.log("My weekend bicycle w/ options:");
console.log("* Description: " + myWeekendBicyle.getDescription());
console.log("* Cost: " + myWeekendBicyle.getCost());
