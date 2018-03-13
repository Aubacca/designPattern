import { RequestTask } from "./requestTask";

console.log("*************************");
console.log("*** The State Pattern ***");
console.log("*************************");

//
// Test cases for state.
let requestTask = new RequestTask();
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
