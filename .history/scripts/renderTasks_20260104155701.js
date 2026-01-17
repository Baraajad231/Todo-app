import { controlRow, filterRow, inputRow, metaRow } from "./elements";
import { getTasks } from "./tasksStorage";

const isDesktopScreen = () => {
  const screenWidth = window.innerWidth;
  const deskTop = screenWidth >= 950;
  return deskTop;
};

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
  if (isDesktopScreen()) {
    controlRow.classList.remove("hidden");
    metaRow.classList.add("hidden");
    filterRow.classList.add("hidden");
  } else {
    metaRow.classList.remove("hidden");
    filterRow.classList.remove("hidden");
  }

  inputRow.insertAdjacentHTML("afterend", tasksElements);
};
