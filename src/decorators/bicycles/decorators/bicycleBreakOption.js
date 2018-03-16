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
}(bicycleOptionDecorator_1.BicycleOptionDecorator));
exports.BicycleBreakOption = BicycleBreakOption;
