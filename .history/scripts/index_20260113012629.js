import {
  initClickEventsListeners,
  initDragAndDropEvent,
  inputTaskEvent,
} from "./events";
import { initList } from "./renderTasks";

initList();
initClickEventsListeners();
inputTaskEvent();
initDragAndDropEvent();
