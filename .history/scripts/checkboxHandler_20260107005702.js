import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  //   const task = findTask(index);
  const taskElement = document.querySelector(`.task[data-index="${index}"]`);
  console.log(taskElement);

  taskElement.classList.toggle("completed");
};
