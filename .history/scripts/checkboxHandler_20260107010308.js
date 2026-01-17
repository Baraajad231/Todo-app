import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  const taskElement = document.querySelector(`.task[data-index="${index}"]`);
  console.log(taskElement);
  taskElement?.classList.toggle("completed");

  const task = findTask(index);
};
