import { RequestTaskStatable } from "./requestTasks/requestTaskStatable";
import { TechnicalDetailingState } from "./requestTasks/technicalDetailingState";
import { MasterDatatState } from "./requestTasks/masterDatatState";
import { TaskSbmittedState } from "./requestTasks/taskSbmittedState";
import { RejectMasterDataState } from "./requestTasks/rejectMasterDataState";
import { TechnicalAssessmentState } from "./requestTasks/technicalAssessmentState";

export class RequestTask {
  private _currentRequestTaskState: RequestTaskStatable;
  public technicalAssessmentState: RequestTaskStatable;
  public technicalDetailingState: RequestTaskStatable;
  public masterDataState: RequestTaskStatable;
  public rejectMasterDataState: RequestTaskStatable;
  public taskSubmittedState: RequestTaskStatable;

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
