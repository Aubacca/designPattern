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
var bicycle_1 = require("./bicycle");
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
}(bicycle_1.Bicycle));
exports.WheelerTX = WheelerTX;
