"use strict";
exports.__esModule = true;
console.log("*************************");
console.log("*** The State Pattern ***");
console.log("*************************");
//import { IRequestTaskState } from "./iRequestTaskState";
//import { TechnicalAssessmentState } from "./technicalAssessmentState";
var requestTask_1 = require("./requestTask");
// List of classes/interfaces used for the state.
/*
export class RequestTask {
  private _currentRequestTaskState: IRequestTaskState;
  public technicalAssessmentState: TechnicalAssessmentState;
  public technicalDetailingState: TechnicalDetailingState;
  public masterDataState: MasterDatatState;
  public rejectMasterDataState: RejectMasterDataState;
  public taskSubmittedState: TaskSbmittedState;

  constructor() {
    this.technicalAssessmentState = new TechnicalAssessmentState(this);
    this.technicalDetailingState = new TechnicalDetailingState(this);
    this.masterDataState = new MasterDatatState(this);
    this.rejectMasterDataState = new RejectMasterDataState(this);
    this.taskSubmittedState = new TaskSbmittedState(this);
    //
    this._currentRequestTaskState = this.technicalAssessmentState;
  }

  public setRequestTaskState(newRequestTaskState: IRequestTaskState) {
    this._currentRequestTaskState = newRequestTaskState;
  }

  public getRequestTaskState(): IRequestTaskState {
    return this._currentRequestTaskState;
  }
}
*/
// State definition.
/*
interface IRequestTaskState {
  requestTask: RequestTask;

  technicalAssessment(): void;
  technicalDetailing(): void;
  masterData(): void;
  rejectMasterData(): void;
  taskSubmitted(): void;
  showState(): string;
}
*/
/*
class TechnicalAssessmentState implements IRequestTaskState {
  constructor(public requestTask: RequestTask) {}

  technicalAssessment(): void {
    console.log("OK: task already in technical assessment.");
  }
  technicalDetailing(): void {
    this.requestTask.setRequestTaskState(
      this.requestTask.technicalDetailingState
    );
    console.log("technical assessment --> technical detailing.");
  }
  masterData(): void {
    console.log("!!! State in technical assessment: cannot do master data!");
  }
  rejectMasterData(): void {
    console.log(
      "!!! State in technical assessment: cannot do reject master data!"
    );
  }
  taskSubmitted(): void {
    console.log("!!! State in technical assessment: cannot submit this task!");
  }

  showState(): string {
    return "TechnicalAssessmentState";
  }
}
*/
/*
class TechnicalDetailingState implements IRequestTaskState {
  constructor(public requestTask: RequestTask) {}

  technicalAssessment(): void {
    console.log(
      "!!! State In technical detailing, cannot do technical assessment!"
    );
  }
  technicalDetailing(): void {
    console.log("OK: task already in technical detailing.");
  }
  masterData(): void {
    this.requestTask.setRequestTaskState(this.requestTask.masterDataState);
    console.log("technical detailing --> master data.");
  }
  rejectMasterData(): void {
    console.log(
      "!!! State in technical detailing: cannot do reject master data!"
    );
  }
  taskSubmitted(): void {
    console.log("!!! State in technical detailing: cannot submit this task!");
  }

  showState(): string {
    return "TechnicalDetailingState";
  }
}
*/
/*
class MasterDatatState implements IRequestTaskState {
  constructor(public requestTask: RequestTask) {}

  technicalAssessment(): void {
    console.log("!!! State in master data: cannot do technical assessment!");
  }
  technicalDetailing(): void {
    console.log("!!! State in master data: cannot do technical detailing!");
  }
  masterData(): void {
    console.log("OK: task already in master data.");
  }
  rejectMasterData(): void {
    this.requestTask.setRequestTaskState(
      this.requestTask.rejectMasterDataState
    );
    console.log("master data --> reject master data.");
  }
  taskSubmitted(): void {
    console.log("master data --> submit task. Task successfully finished!");
    this.requestTask.setRequestTaskState(this.requestTask.taskSubmittedState);
  }

  showState(): string {
    return "MasterDatatState";
  }
}
*/
/*
class RejectMasterDataState implements IRequestTaskState {
  constructor(public requestTask: RequestTask) {}

  technicalAssessment(): void {
    this.requestTask.setRequestTaskState(
      this.requestTask.technicalAssessmentState
    );
    console.log("reject master data --> technical assessment.");
  }
  technicalDetailing(): void {
    this.requestTask.setRequestTaskState(
      this.requestTask.technicalDetailingState
    );
    console.log("reject master data --> technical detailing.");
  }
  masterData(): void {
    this.requestTask.setRequestTaskState(this.requestTask.masterDataState);
    console.log("reject master data --> master data.");
  }
  rejectMasterData(): void {
    console.log("OK: task already in master data.");
  }
  taskSubmitted(): void {
    console.log("!!! State in reject master data: cannot submit task!");
  }

  showState(): string {
    return "RejectMasterDataState";
  }
}
*/
/*
class TaskSbmittedState implements IRequestTaskState {
  constructor(public requestTask: RequestTask) {}

  technicalAssessment(): void {
    console.log(
      "!!! Task submitted: cannot set this task to technical assessment!"
    );
  }
  technicalDetailing(): void {
    console.log(
      "!!! Task submitted: cannot set this task to technical detailing!"
    );
  }
  masterData(): void {
    console.log("!!! Task submitted: cannot set this task to master data!");
  }
  rejectMasterData(): void {
    console.log("!!! Task submitted: cannot reject master data task!");
  }
  taskSubmitted(): void {
    console.log("OK: task already submitted.");
  }

  showState(): string {
    return "TaskSbmittedState";
  }
}
*/
//
// Test cases for state.
var requestTask = new requestTask_1.RequestTask();
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
