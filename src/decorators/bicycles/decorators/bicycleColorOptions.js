"use strict";
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
exports.__esModule = true;
var bicycleOptionDecorator_1 = require("./bicycleOptionDecorator");
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
}(bicycleOptionDecorator_1.BicycleOptionDecorator));
exports.BicycleColorOptions = BicycleColorOptions;
