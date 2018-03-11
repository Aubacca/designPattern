console.log("*************************");
console.log("*** The State Pattern ***");
console.log("*************************");
// List of classes/interfaces used for the state.
var RequestTask = /** @class */ (function () {
    function RequestTask() {
        this.technicalAssessmentState = new TechnicalAssessmentState(this);
        this.technicalDetailingState = new TechnicalDetailingState(this);
        this.masterDataState = new MasterDatatState(this);
        this.rejectMasterDataState = new RejectMasterDataState(this);
        this.taskSubmittedState = new TaskSbmittedState(this);
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
//
// Test cases for state.
var requestTask = new RequestTask();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
requestTask.getRequestTaskState().taskSubmitted();
requestTask.getRequestTaskState().rejectMasterData();
requestTask.getRequestTaskState().masterData();
requestTask.getRequestTaskState().technicalAssessment();
requestTask.getRequestTaskState().technicalDetailing();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
requestTask.getRequestTaskState().taskSubmitted();
requestTask.getRequestTaskState().rejectMasterData();
requestTask.getRequestTaskState().masterData();
requestTask.getRequestTaskState().technicalAssessment();
requestTask.getRequestTaskState().technicalDetailing();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
requestTask.getRequestTaskState().masterData();
requestTask.getRequestTaskState().technicalAssessment();
requestTask.getRequestTaskState().rejectMasterData();
requestTask.getRequestTaskState().taskSubmitted();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
requestTask.getRequestTaskState().technicalDetailing();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
requestTask.getRequestTaskState().masterData();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
requestTask.getRequestTaskState().taskSubmitted();
requestTask.getRequestTaskState().rejectMasterData();
requestTask.getRequestTaskState().masterData();
requestTask.getRequestTaskState().technicalAssessment();
requestTask.getRequestTaskState().technicalDetailing();
requestTask.getRequestTaskState().taskSubmitted();
console.log("\nRequest: " + requestTask.getRequestTaskState().showState());
