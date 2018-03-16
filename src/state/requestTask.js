"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var technicalDetailingState_1 = require("./requestTasks/technicalDetailingState");
var masterDatatState_1 = require("./requestTasks/masterDatatState");
var taskSbmittedState_1 = require("./requestTasks/taskSbmittedState");
var rejectMasterDataState_1 = require("./requestTasks/rejectMasterDataState");
var technicalAssessmentState_1 = require("./requestTasks/technicalAssessmentState");
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
