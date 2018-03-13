"use strict";
exports.__esModule = true;
var TechnicalAssessmentState = /** @class */ (function () {
    function TechnicalAssessmentState(requestTask) {
        this.requestTask = requestTask;
    }
    TechnicalAssessmentState.prototype.technicalAssessment = function () {
        console.log("OK: task already in technical assessment.");
    };
    TechnicalAssessmentState.prototype.technicalDetailing = function () {
        this.requestTask.setRequestTaskState(this.requestTask.technicalDetailingState);
        console.log("technical assessment --> technical detailing.");
    };
    TechnicalAssessmentState.prototype.masterData = function () {
        console.log("!!! State in technical assessment: cannot do master data!");
    };
    TechnicalAssessmentState.prototype.rejectMasterData = function () {
        console.log("!!! State in technical assessment: cannot do reject master data!");
    };
    TechnicalAssessmentState.prototype.taskSubmitted = function () {
        console.log("!!! State in technical assessment: cannot submit this task!");
    };
    TechnicalAssessmentState.prototype.showState = function () {
        return "TechnicalAssessmentState";
    };
    return TechnicalAssessmentState;
}());
exports.TechnicalAssessmentState = TechnicalAssessmentState;
