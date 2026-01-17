import { filterRow, inputRow, metaRow } from "./elements";
import { getTasks } from "./tasksStorage";

const screenWidth = window.innerWidth;
if (screenWidth >= 950) {
  const controlRows = ``;
}
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

  inputRow.insertAdjacentHTML("afterend", tasksElements);
  metaRow.classList.remove("hidden");
  filterRow.classList.remove("hidden");
};
