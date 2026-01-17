import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  task = findTask(index);

  task.parentElement.classList.toggle(".completed");
};
