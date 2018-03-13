import { RequestTaskStatable } from "./requestTaskStatable";
import { RequestTask } from "./requestTask";

export class TechnicalDetailingState implements RequestTaskStatable {
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
