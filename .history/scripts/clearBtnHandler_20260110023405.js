import { renderTasks } from "./renderTasks";
import { getTasks } from "./tasksStorage";

export const clearBtnHandler = () => {
  const tasks = getTasks();
  let remainingTasks = [];
  tasks.forEach((task) => {
    if (!task.isCompleted) {
      remainingTasks.push(task);
    }
  });
  tasks = remainingTasks;
  renderTasks(getTy);
  console.log("From Handler");
};
