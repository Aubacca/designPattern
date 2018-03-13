"use strict";
exports.__esModule = true;
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
exports.Bicycle = Bicycle;
