import { getTasks } from "./tasksStorage";

export const checkboxHandler = (index) => {
  tasks = getTasks();
  tasks[index].completed;
};
