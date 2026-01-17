import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks } from "./tasksStorage";

export const clearBtnHandler = () => {
  let tasks = getTasks();
  let remainingTasks = [];
  tasks.forEach((task) => {
    if (!task.isCompleted) {
      remainingTasks.push(task);
    }
  });
  console.log(remainingTasks);

  tasks = remainingTasks;
  renderTasks(getFilterState());
  console.log("From Handler");
};
