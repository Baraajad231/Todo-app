import { checkboxHandler, checkboxinputHandler } from "./checkboxHandler.js";
import {
  checkboxInput,
  checkboxTaskListElements,
  inputField,
} from "./elements.js";
import { renderTasks } from "./renderTasks.js";
import { getTasks, saveTasks } from "./tasksStorage.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e, index) => {
    if (e.key === "Enter") {
      const taskInterd = inputField.value.trim();
      if (taskInterd) {
        console.log(taskInterd);
        let tasks = getTasks();

        let index = tasks.length.toString();
        // const inputCheckbox = document.querySelector(".todo__input .checkbox");
        // checkboxHandler(0);
        // if (inputCheckbox) {
        // }
        const inputDiv = document.querySelector(".todo__input");

        if (inputField.classList.contains("completed")) {
        }
        tasks.push({
          taskValue: taskInterd,
          isCompleted: inputField.classList.contains("completed")
            ? true
            : false,
        });

        saveTasks(tasks);
        inputField.value = "";
        renderTasks();
      } else {
        inputField.value = "";
      }
    }
  });
};

export const checkboxEvent = () => {
  checkboxTaskListElements()?.forEach((element, index) => {
    element.addEventListener("click", () => {
      checkboxHandler(index);
    });
  });

  checkboxInput.addEventListener("click", () => {
    checkboxinputHandler();
  });
};
