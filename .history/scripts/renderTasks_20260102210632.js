import { todoHeader } from "./elements";
import { getTasks } from "./tasksStorage";

export const renderTasks = () => {
  const tasks = getTasks();
  let tasksElements = ``;

  tasks.forEach((task, index) => {
    tasksElements += `
    <ul class="todo__list">
          <li class="todo__list__row todo__list__row-input">
            <button class="checkbox button">
              <img
                src="./images/icon-check.svg"
                alt="check"
                class="checkbox__icon"
              />
            </button>
            <input
              type="text"
              placeholder="Creat a new Todo..."
              class="todo__list__input"
            />
          </li>
    <li class="todo__list__row" data-index="${index}" data-completed="${task.isCompleted}">
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
          </li>
    </ul>`;
  });
  todoHeader.insertAdjacentHTML("afterend", tasksElements);
};
