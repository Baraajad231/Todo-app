import { checkboxHandler } from "./checkboxHandler.js";
import { checkboxElements, inputField } from "./elements.js";
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
        const inputCheckbox = document.querySelector(".todo__input .checkbox");
        tasks.push({
          taskValue: taskInterd,
          isCompleted: false,
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
  checkboxElements()?.forEach((element, index) => {
    element.addEventListener("click", () => {
      checkboxHandler(index - 1);
    });
  });
};
