import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage";

export const clearBtnHandler = () => {
  let tasks = getTasks();
  let remainingTasks = [];
  tasks.forEach((task) => {
    if (!task.isCompleted) {
      remainingTasks.push(task);
    }
    task.classList.add("exit");
  });

  tasks = remainingTasks;
  saveTasks(tasks);

  renderTasks(getFilterState());
  console.log("From Handler");
};
