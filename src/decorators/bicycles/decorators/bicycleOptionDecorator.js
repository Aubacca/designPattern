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
var bicycle_1 = require("../bicycle");
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
}(bicycle_1.Bicycle));
exports.BicycleOptionDecorator = BicycleOptionDecorator;
