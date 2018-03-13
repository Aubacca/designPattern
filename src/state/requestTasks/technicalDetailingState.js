"use strict";
exports.__esModule = true;
var TechnicalDetailingState = /** @class */ (function () {
    function TechnicalDetailingState(requestTask) {
        this.requestTask = requestTask;
    }
    TechnicalDetailingState.prototype.technicalAssessment = function () {
        console.log("!!! State In technical detailing, cannot do technical assessment!");
    };
    TechnicalDetailingState.prototype.technicalDetailing = function () {
        console.log("OK: task already in technical detailing.");
    };
    TechnicalDetailingState.prototype.masterData = function () {
        this.requestTask.setRequestTaskState(this.requestTask.masterDataState);
        console.log("technical detailing --> master data.");
    };
    TechnicalDetailingState.prototype.rejectMasterData = function () {
        console.log("!!! State in technical detailing: cannot do reject master data!");
    };
    TechnicalDetailingState.prototype.taskSubmitted = function () {
        console.log("!!! State in technical detailing: cannot submit this task!");
    };
    TechnicalDetailingState.prototype.showState = function () {
        return "TechnicalDetailingState";
    };
    return TechnicalDetailingState;
}());
exports.TechnicalDetailingState = TechnicalDetailingState;
