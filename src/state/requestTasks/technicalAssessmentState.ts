import { RequestTaskStatable } from "./requestTaskStatable";
import { RequestTask } from "../requestTask";

export class TechnicalAssessmentState implements RequestTaskStatable {
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
