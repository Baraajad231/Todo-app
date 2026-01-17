import {
  controlRow,
  filterRow,
  inputRow,
  itemsCount,
  metaRow,
} from "./elements";
import { getTasks } from "./tasksStorage";

export const ShowHideControls = () => {
  const screenWidth = window.innerWidth;
  const isDesktop = screenWidth >= 950;

  controlRow.classList.toggle("hidden", isDesktop);

  // metaRow.classList.toggle("hidden", isDesktop);
  // filterRow.classList.toggle("hidden", isDesktop);
};

export const renderConteolRow = (isDesktop) => {
  const controlRowForBc = `
  <li class="todo__list__row todo__list__row--control hidden">
            <div class="todo__items-left">
              <span class="todo__items-count">0</span>
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
          </li>`;

  const controlRowForMobile = `
  <li class="todo__list__row todo__list__row--control hidden">
            <div class="todo__items-left">
              <span class="todo__items-count">0</span>
              <span class="todo__items-text">items left</span>
            </div>

            <button class="todo__list-clear button">Clear Completed</button>
          </li>

          <li class="todo__list__row todo__list__row--control hidden">
            <button class="todo__list-all button button-filter">All</button>
            <button class="todo__list-active button button-filter">
              Active
            </button>
            <button class="todo__list-completed button button-filter">
              Completed
            </button>
          </li>
`;
  if (isDesktop) {
    return controlRowForBc;
  } else {
    return controlRowForMobile;
  }
};

export const renderTasks = () => {
  const tasks = getTasks();

  const pastTasks = document.querySelectorAll(".task");
  pastTasks.forEach((task) => {
    task.remove();
  });

  const screenWidth = window.innerWidth;
  const isDesktop = screenWidth >= 950;

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

  itemsCount.textContent = tasks.length;
  ShowHideControls();

  inputRow.insertAdjacentHTML("afterend", tasksElements);
};
