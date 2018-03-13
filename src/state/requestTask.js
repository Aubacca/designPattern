"use strict";
exports.__esModule = true;
var technicalAssessmentState_1 = require("./technicalAssessmentState");
var technicalDetailingState_1 = require("./technicalDetailingState");
var masterDatatState_1 = require("./masterDatatState");
var rejectMasterDataState_1 = require("./rejectMasterDataState");
var taskSbmittedState_1 = require("./taskSbmittedState");
var RequestTask = /** @class */ (function () {
    function RequestTask() {
        this.technicalAssessmentState = new technicalAssessmentState_1.TechnicalAssessmentState(this);
        this.technicalDetailingState = new technicalDetailingState_1.TechnicalDetailingState(this);
        this.masterDataState = new masterDatatState_1.MasterDatatState(this);
        this.rejectMasterDataState = new rejectMasterDataState_1.RejectMasterDataState(this);
        this.taskSubmittedState = new taskSbmittedState_1.TaskSbmittedState(this);
        //
        this._currentRequestTaskState = this.technicalAssessmentState;
    }
    RequestTask.prototype.setRequestTaskState = function (newRequestTaskState) {
        this._currentRequestTaskState = newRequestTaskState;
    };
    RequestTask.prototype.getRequestTaskState = function () {
        return this._currentRequestTaskState;
    };
    return RequestTask;
}());
exports.RequestTask = RequestTask;
