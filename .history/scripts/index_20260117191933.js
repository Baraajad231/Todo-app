import {
  initClickEventsListeners,
  initDragAndDropEvent,
  inputTaskEvent,
} from "./events.js";
import { initList } from "./renderTasks.js";
import { getTheme } from "./tasksStorage.js";
import { initTheme } from "./toggleThemeHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  initList();
  initClickEventsListeners();
  inputTaskEvent();
  initDragAndDropEvent();
  initTheme(getTheme());
});
