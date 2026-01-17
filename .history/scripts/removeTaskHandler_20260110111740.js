import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage";

export const removeTaskHandler = (index) => {
  let tasks = getTasks();
  tasks.splice(index, 0);
  saveTasks(tasks);
  renderTasks(getFilterState());
};
