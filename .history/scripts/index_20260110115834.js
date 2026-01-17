import {
  checkboxEvent,
  clearCompletedEvent,
  filtersEvent,
  inputTaskEvent,
  removeTaskEvent,
} from "./events";
import { initList } from "./renderTasks";

initList();
inputTaskEvent();
checkboxEvent();
filtersEvent();
clearCompletedEvent();
removeTaskEvent();
