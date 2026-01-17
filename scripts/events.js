import { checkboxHandler, checkboxinputHandler } from "./checkboxHandler.js";
import { clearBtnHandler } from "./clearBtnHandler.js";
import { endDrag, onDrag, startDrag } from "./DragAndDropHandlers.js";
import { inputField, taskList, todo } from "./elements.js";
import {
  activeFilterHandler,
  allFilterHandler,
  completedFilterHandler,
} from "./filtersHandler.js";
import { inputEnterHandler } from "./inputEnterHandler.js";
import { removeTaskHandler } from "./removeTaskHandler.js";
import { toggleThemeHandler } from "./toggleThemeHandler.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", inputEnterHandler);
};

export const initClickEventsListeners = () => {
  todo.addEventListener("click", (e) => {
    /*For checkboxes */
    const taskEl = e.target.closest(".task");
    if (taskEl && e.target.closest(".checkbox")) {
      const index = parseInt(taskEl.dataset.index);
      checkboxHandler(index);
    }

    if (e.target.closest(".todo__input .checkbox")) {
      checkboxinputHandler();
    }

    /*For clear Btn */
    if (e.target.closest(".button-clear")) {
      document
        .querySelectorAll("[data-completed='true']")
        .forEach((comTask) => comTask.classList.add("exit"));

      setTimeout(() => clearBtnHandler(), 200);
    }

    /*For filters Btns */
    if (e.target.closest('[data-type="all"]')) {
      allFilterHandler();
    }
    if (e.target.closest('[data-type="active"]')) {
      activeFilterHandler();
    }
    if (e.target.closest('[data-type="completed"]')) {
      completedFilterHandler();
    }

    /*For remove Btn */
    if (e.target.closest(".remove-btn")) {
      const index = parseInt(taskEl.dataset.index);
      taskEl.classList.add("exit");
      setTimeout(() => removeTaskHandler(index), 200);
    }

    /*For theme*/
    if (e.target.closest(".todo__theme")) {
      toggleThemeHandler();
    }
  });
};

export const initDragAndDropEvent = () => {
  taskList.addEventListener("pointerdown", startDrag);
  document.addEventListener("pointermove", onDrag);
  document.addEventListener("pointerup", endDrag);
};
