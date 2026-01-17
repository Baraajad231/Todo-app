import {
  initClickEventsListeners,
  initDragAndDropEvent,
  inputTaskEvent,
} from "./events";
import { initList } from "./renderTasks";
import { getTheme } from "./tasksStorage";
import { initTheme } from "./toggleThemeHandler";

initList();
initClickEventsListeners();
inputTaskEvent();
initDragAndDropEvent();
initTheme(getTheme);
