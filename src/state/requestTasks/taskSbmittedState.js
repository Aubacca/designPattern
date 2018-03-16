"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskSbmittedState = /** @class */ (function () {
    function TaskSbmittedState(requestTask) {
        this.requestTask = requestTask;
    }
    TaskSbmittedState.prototype.technicalAssessment = function () {
        console.log("!!! Task submitted: cannot set this task to technical assessment!");
    };
    TaskSbmittedState.prototype.technicalDetailing = function () {
        console.log("!!! Task submitted: cannot set this task to technical detailing!");
    };
    TaskSbmittedState.prototype.masterData = function () {
        console.log("!!! Task submitted: cannot set this task to master data!");
    };
    TaskSbmittedState.prototype.rejectMasterData = function () {
        console.log("!!! Task submitted: cannot reject master data task!");
    };
    TaskSbmittedState.prototype.taskSubmitted = function () {
        console.log("OK: task already submitted.");
    };
    TaskSbmittedState.prototype.showState = function () {
        return "TaskSbmittedState";
    };
    return TaskSbmittedState;
}());
exports.TaskSbmittedState = TaskSbmittedState;
