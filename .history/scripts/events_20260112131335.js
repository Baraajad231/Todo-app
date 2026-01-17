import { checkboxHandler, checkboxinputHandler } from "./checkboxHandler.js";
import { clearBtnHandler } from "./clearBtnHandler.js";
import { inputField, todo } from "./elements.js";
import {
  activeFilterHandler,
  allFilterHandler,
  completedFilterHandler,
} from "./filtersHandler.js";
import { inputEnterHandler } from "./inputEnterHandler.js";
import { removeTaskHandler } from "./removeTaskHandler.js";

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
      clearBtnHandler();
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
      removeTaskHandler(index);
    }

    /*For theme*/
    if (e.target.closest(".todo__theme")) {
    }
  });
};

// export const checkboxEvent = () => {
//   checkboxTaskListElements()?.forEach((element, index) => {
//     element.addEventListener("click", () => {
//       checkboxHandler(index);
//     });
//   });

//   checkboxInput.addEventListener("click", () => {
//     checkboxinputHandler();
//   });
// };

// export const clearCompletedEvent = () => {
//   clearBtn.addEventListener("click", () => {
//     clearBtnHandler();
//     // checkboxEvent();
//   });
// };

// export const filtersEvent = () => {
//   allFilter.addEventListener("click", allFilterHandler);
//   activeFilter.addEventListener("click", activeFilterHandler);
//   completedFilter.addEventListener("click", completedFilterHandler);
// };

// export const removeTaskEvent = () => {
//   removeBtns()?.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       removeTaskHandler(index);
//       removeTaskEvent();
//     });
//   });
// };
