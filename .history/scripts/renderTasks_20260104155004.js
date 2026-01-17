import { filterRow, inputRow, metaRow } from "./elements";
import { getTasks } from "./tasksStorage";

const screenWidth = window.innerWidth;
const deskTop = screenWidth >= 950;
const controlRows = ``;
if (deskTop) {
  controlRows = ` <li class="todo__list__row todo__list__row--control">
            <div class="todo__items-left">
              <span class="todo__items-count">5</span>
              <span class="todo__items-text">items left</span>
            </div>

            <div class="todo__list--filter">
              <button class="todo__list-all button button-filter">All</button>
              <button class="todo__list-active button button-filter">
                Active
              </button>
              <button class="todo__list-completed button button-filter">
                Completed
              </button>
            </div>

            <button class="todo__list-clear button">Clear Completed</button>
          </li> `;
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

  if (deskTop) {
  }

  inputRow.insertAdjacentHTML("afterend", tasksElements);
  metaRow.classList.remove("hidden");
  filterRow.classList.remove("hidden");
};
