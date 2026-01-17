import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage";

export const removeTaskHandler = (index) => {
  let tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks(getFilterState());
};
const addRremoveClassExit = () => {
  task.classList.add("exit");
  task.addEventListener(
    "transitionend",
    () => {
      task.remove();
      saveTasks();
    },
    { once: true }
  );
};
