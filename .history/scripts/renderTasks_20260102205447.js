import { inputrow } from "./elements";
import { getTasks } from "./tasksStorage";

const renderTasks = () => {
  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const tasksElements = ``;
    tasksElements += `<li class="todo__list__row" data-index="${index}" data-completed="${task.isCompleted}">
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

    inputrow.insertAdjacentHTML("afterend", tasksElements);
  });
};
