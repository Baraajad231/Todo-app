import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  task = findTask(index);

  const currentRow = task.closest(".todo__list__row ");
};
