import { getTasks } from "./tasksStorage";

export const removeTaskHandler = (index) => {
  let tasks = getTasks();
  let newTasks = [];
  tasks.splice();
};
