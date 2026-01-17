import { renderTasks } from "./renderTasks.js";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage.js";

export const removeTaskHandler = (index) => {
  let tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks(getFilterState());
};
