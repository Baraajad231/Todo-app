import {
  checkboxEvent,
  clearCompletedEvent,
  filtersEvent,
  inputTaskEvent,
  removeTaskEvent,
} from "./events";
import { initList } from "./renderTasks";

inputTaskEvent();
initList();
checkboxEvent();
filtersEvent();
clearCompletedEvent();
removeTaskEvent();
