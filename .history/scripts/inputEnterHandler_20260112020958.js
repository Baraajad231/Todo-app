import { inputField } from "./elements";
import { renderTasks } from "./renderTasks";
import { getTasks, saveTasks } from "./tasksStorage";

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
  });

  saveTasks(tasks);

  renderTasks(getFilterState());
};

const resetInput = () => {
  const inputDiv = document.querySelector(".todo__input");
  inputDiv.classList.remove("completed");
  inputField.value = "";
};
