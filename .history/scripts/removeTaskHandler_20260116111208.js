import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage";

export const removeTaskHandler = (index) => {
  let tasks = getTasks();
  addRremoveClassExit(index);
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks(getFilterState());
};
const addRremoveClassExit = (index) => {
  const RemovedTask = document.querySelector(`.task[data-index='${index}']`);
  setTimeout(() => {}, 1000);
};
