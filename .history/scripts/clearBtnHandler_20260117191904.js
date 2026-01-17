import { renderTasks } from "./renderTasks.js";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage.js";

export const clearBtnHandler = () => {
  let tasks = getTasks();
  let remainingTasks = [];
  tasks.forEach((task) => {
    if (!task.isCompleted) {
      remainingTasks.push(task);
    }
  });

  tasks = remainingTasks;
  saveTasks(tasks);

  renderTasks(getFilterState());
  console.log("From Handler");
};
