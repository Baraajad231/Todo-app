import { checkboxHandler, checkboxinputHandler } from "./checkboxHandler.js";
import { clearBtnHandler } from "./clearBtnHandler.js";
import {
  activeFilter,
  allFilter,
  checkboxInput,
  checkboxTaskListElements,
  clearBtn,
  completedFilter,
  inputField,
  removeBtns,
  todo,
} from "./elements.js";
import {
  activeFilterHandler,
  allFilterHandler,
  completedFilterHandler,
} from "./filtersHandler.js";
import { removeTaskHandler } from "./removeTaskHandler.js";
import { renderTasks } from "./renderTasks.js";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage.js";

// ممكن تعمل event delegation
// ضروووووووووووري تعمل refactoring
export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e, index) => {
    if (e.key === "Enter") {
      const taskInterd = inputField.value.trim();
      if (taskInterd) {
        let tasks = getTasks();

        let index = tasks.length.toString();

        // اذا كان ال checkbox تاعت ال input تم الضغط عليها هذا يعني انه سيتم اضافة عنصر مكتمل
        const inputDiv = document.querySelector(".todo__input");

        tasks.push({
          taskValue: taskInterd,
          isCompleted: inputDiv.classList.contains("completed") ? true : false,
        });

        saveTasks(tasks);

        renderTasks(getFilterState());

        //  اعادة تهيئة الcheckbox الخاص بالادخال
        inputDiv.classList.remove("completed");
        inputField.value = "";

        // checkboxEvent();
      } else {
        inputField.value = "";
      }
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

export const removeTaskEvent = () => {
  removeBtns()?.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      removeTaskHandler(index);
      removeTaskEvent();
    });
  });
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
      completedFilterHandler();
    }

    /** */
  });
};
