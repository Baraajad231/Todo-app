import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  task = findTask(index);

  task.classList.toggle("completed");
};
