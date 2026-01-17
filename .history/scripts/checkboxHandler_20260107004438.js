import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  const task = findTask(index);

  task.parentElement.classList.toggle("completed");
};
