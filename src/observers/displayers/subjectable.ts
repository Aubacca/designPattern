import { Observable } from "./observable";

export interface Subjectable {
  registerObserver(observer: Observable): void;
  unregisterObserver(observer: Observable): void;
  notifyObservers(): void;
}
