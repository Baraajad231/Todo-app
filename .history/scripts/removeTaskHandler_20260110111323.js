import { getTasks, saveTasks } from "./tasksStorage";

export const removeTaskHandler = (index) => {
  let tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
};
