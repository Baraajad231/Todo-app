import { taskList } from "./elements";
import { getTasks } from "./tasksStorage";

export const renderTasks = () => {
  const tasks = getTasks();

  pastTasks = document.querySelectorAll(".todo__list__row.task");
  pastTasks.forEach((task) => {
    task.remove();
  });

  let tasksElements = ``;

  tasks.forEach((task, index) => {
    tasksElements += `
    <li class="todo__list__row task" data-index="${index}" data-completed="${task.isCompleted}">
            <button class="checkbox button">
              <img
                src="./images/icon-check.svg"
                alt="check"
                class="checkbox__icon"
              />
            </button>
            <span class="todo__list__task">${task.taskValue}</span>
            <button class="remove-btn button">
              <img src="./images/icon-cross.svg" alt="" class="remove-icon" />
            </button>
    </li>`;
  });

  const Listrows = `
          ${tasksElements}
    
`;
  taskList.innerHTML = ``;
  taskList.insertAdjacentHTML("afterbegin", Listrows);
};
