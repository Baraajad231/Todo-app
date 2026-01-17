import {
  initClickEventsListeners,
  initDragAndDropEvent,
  inputTaskEvent,
} from "./events";
import { initList } from "./renderTasks";
import { getTheme } from "./tasksStorage";
import { initTheme } from "./toggleThemeHandler";

document.documentElement.dataset.theme = getTheme();
initList();
initClickEventsListeners();
inputTaskEvent();
initDragAndDropEvent();
