import { inputField } from "./elements";
import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, getTheme, saveTasks } from "./tasksStorage";
import { initTheme } from "./toggleThemeHandler";

export const inputEnterHandler = (e) => {
  if (e.key !== "Enter") return;

  const taskValue = inputField.value.trim();
  if (!taskValue) {
    inputField.value = "";
    return;
  }

  addTask(taskValue);
  resetInput();
};

const addTask = (taskValue) => {
  let tasks = getTasks();

  let index = tasks.length.toString();

  const inputDiv = document.querySelector(".todo__input");

  tasks.push({
    taskValue,
    isCompleted: inputDiv.classList.contains("completed") ? true : false,
    id: Date.now(),
  });

  saveTasks(tasks);

  renderTasks(getFilterState());
  initTheme(getTheme());
};

const resetInput = () => {
  const inputDiv = document.querySelector(".todo__input");
  inputDiv.classList.remove("completed");
  inputField.value = "";
};
