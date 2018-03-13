import { RequestTaskStatable } from "./requestTaskStatable";
import { TechnicalAssessmentState } from "./technicalAssessmentState";
import { TechnicalDetailingState } from "./technicalDetailingState";
import { MasterDatatState } from "./masterDatatState";
import { RejectMasterDataState } from "./rejectMasterDataState";
import { TaskSbmittedState } from "./taskSbmittedState";

export class RequestTask {
  private _currentRequestTaskState: RequestTaskStatable;
  public technicalAssessmentState: RequestTaskStatable;
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

  public setRequestTaskState(newRequestTaskState: RequestTaskStatable) {
    this._currentRequestTaskState = newRequestTaskState;
  }

  public getRequestTaskState(): RequestTaskStatable {
    return this._currentRequestTaskState;
  }
}
