import { RequestTaskStatable } from "./requestTaskStatable";
import { RequestTask } from "../requestTask";

export class MasterDatatState implements RequestTaskStatable {
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
