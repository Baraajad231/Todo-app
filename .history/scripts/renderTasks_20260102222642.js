import { inputRow } from "./elements";
import { getTasks } from "./tasksStorage";

export const renderTasks = () => {
  const tasks = getTasks();

  const pastTasks = document.querySelectorAll(".task");
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
    
          <li class="todo__list__row todo__list__row--meta">
            <div class="todo__items-left">
              <span class="todo__items-count">5</span>
              <span class="todo__items-text">items left</span>
            </div>

            <button class="todo__list-clear button">Clear Completed</button>
          </li>

          <li class="todo__list__row todo__list__row--filter">
            <button class="todo__list-all button button-filter">All</button>
            <button class="todo__list-active button button-filter">
              Active
            </button>
            <button class="todo__list-completed button button-filter">
              Completed
            </button>
          </li>
`;
  inputRow.insertAdjacentHTML("afterend", Listrows);
  metaRow.style.dsiplay = "flex";
};
