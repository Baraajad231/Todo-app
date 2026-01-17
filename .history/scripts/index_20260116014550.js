import {
  initClickEventsListeners,
  initDragAndDropEvent,
  inputTaskEvent,
} from "./events";
import { initList } from "./renderTasks";
import { getTheme } from "./tasksStorage";
import { initTheme } from "./toggleThemeHandler";

initTheme(getTheme());

initList();
initClickEventsListeners();
inputTaskEvent();
initDragAndDropEvent();
