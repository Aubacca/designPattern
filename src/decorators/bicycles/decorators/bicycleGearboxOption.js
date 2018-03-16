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
Object.defineProperty(exports, "__esModule", { value: true });
var bicycleOptionDecorator_1 = require("./bicycleOptionDecorator");
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
}(bicycleOptionDecorator_1.BicycleOptionDecorator));
exports.BicycleGearboxOption = BicycleGearboxOption;
