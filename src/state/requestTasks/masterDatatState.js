"use strict";
exports.__esModule = true;
var MasterDatatState = /** @class */ (function () {
    function MasterDatatState(requestTask) {
        this.requestTask = requestTask;
    }
    MasterDatatState.prototype.technicalAssessment = function () {
        console.log("!!! State in master data: cannot do technical assessment!");
    };
    MasterDatatState.prototype.technicalDetailing = function () {
        console.log("!!! State in master data: cannot do technical detailing!");
    };
    MasterDatatState.prototype.masterData = function () {
        console.log("OK: task already in master data.");
    };
    MasterDatatState.prototype.rejectMasterData = function () {
        this.requestTask.setRequestTaskState(this.requestTask.rejectMasterDataState);
        console.log("master data --> reject master data.");
    };
    MasterDatatState.prototype.taskSubmitted = function () {
        console.log("master data --> submit task. Task successfully finished!");
        this.requestTask.setRequestTaskState(this.requestTask.taskSubmittedState);
    };
    MasterDatatState.prototype.showState = function () {
        return "MasterDatatState";
    };
    return MasterDatatState;
}());
exports.MasterDatatState = MasterDatatState;
