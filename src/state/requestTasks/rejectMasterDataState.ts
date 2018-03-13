import { RequestTaskStatable } from "./requestTaskStatable";
import { RequestTask } from "../requestTask";

export class RejectMasterDataState implements RequestTaskStatable {
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
