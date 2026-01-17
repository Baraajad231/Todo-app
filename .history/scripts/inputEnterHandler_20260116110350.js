import { inputField } from "./elements";
import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage";

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
  addRemoveClassEnter();
};

const resetInput = () => {
  const inputDiv = document.querySelector(".todo__input");
  inputDiv.classList.remove("completed");
  inputField.value = "";
};

const addRemoveClassEnter = () => {
  const enteredTask = document.querySelector(".task:last-child ");
  enteredTask.classList.add("enter");
  requestAnimationFrame(() => enteredTask.classList.remove("enter"));
};
