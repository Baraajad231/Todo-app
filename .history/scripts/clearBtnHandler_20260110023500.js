import { renderTasks } from "./renderTasks";
import { getTasks } from "./tasksStorage";

export const clearBtnHandler = () => {
  let tasks = getTasks();
  let remainingTasks = [];
  tasks.forEach((task) => {
    if (!task.isCompleted) {
      remainingTasks.push(task);
    }
  });
  tasks = remainingTasks;
  renderTasks(getFilterState());
  console.log("From Handler");
};
