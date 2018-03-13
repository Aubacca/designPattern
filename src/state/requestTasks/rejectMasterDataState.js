"use strict";
exports.__esModule = true;
var RejectMasterDataState = /** @class */ (function () {
    function RejectMasterDataState(requestTask) {
        this.requestTask = requestTask;
    }
    RejectMasterDataState.prototype.technicalAssessment = function () {
        this.requestTask.setRequestTaskState(this.requestTask.technicalAssessmentState);
        console.log("reject master data --> technical assessment.");
    };
    RejectMasterDataState.prototype.technicalDetailing = function () {
        this.requestTask.setRequestTaskState(this.requestTask.technicalDetailingState);
        console.log("reject master data --> technical detailing.");
    };
    RejectMasterDataState.prototype.masterData = function () {
        this.requestTask.setRequestTaskState(this.requestTask.masterDataState);
        console.log("reject master data --> master data.");
    };
    RejectMasterDataState.prototype.rejectMasterData = function () {
        console.log("OK: task already in master data.");
    };
    RejectMasterDataState.prototype.taskSubmitted = function () {
        console.log("!!! State in reject master data: cannot submit task!");
    };
    RejectMasterDataState.prototype.showState = function () {
        return "RejectMasterDataState";
    };
    return RejectMasterDataState;
}());
exports.RejectMasterDataState = RejectMasterDataState;
