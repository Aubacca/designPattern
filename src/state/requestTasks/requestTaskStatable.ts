import { RequestTask } from "../requestTask";

// State definition.
export interface RequestTaskStatable {
  requestTask: RequestTask;

  technicalAssessment(): void;
  technicalDetailing(): void;
  masterData(): void;
  rejectMasterData(): void;
  taskSubmitted(): void;
  showState(): string;
}
