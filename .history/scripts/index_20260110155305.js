import {
  filtersEvent,
  initClickEventsListeners,
  inputTaskEvent,
  removeTaskEvent,
} from "./events";
import { initList } from "./renderTasks";

initList();
initClickEventsListeners();
inputTaskEvent();
// checkboxEvent();
filtersEvent();
// clearCompletedEvent();
removeTaskEvent();
