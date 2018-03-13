import { RequestTaskStatable } from "./requestTaskStatable";
import { RequestTask } from "../requestTask";

export class TaskSbmittedState implements RequestTaskStatable {
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
