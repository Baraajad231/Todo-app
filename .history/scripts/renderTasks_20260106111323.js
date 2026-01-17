import { itemsCount, taskList, todoStatusBar } from "./elements";
import { getTasks } from "./tasksStorage";

// export const ShowHideControls = () => {
//   const screenWidth = window.innerWidth;
//   const isDesktop = screenWidth >= 950;

//   controlRow.classList.toggle("hidden", !isDesktop);

//   metaRow.classList.toggle("hidden", isDesktop);
//   filterRow.classList.toggle("hidden", isDesktop);
// };

export const itemsCountHandler = (count) => {
  itemsCount.textContent = count;
};

export const ShowHideControls = (count) => {
  todoStatusBar.classList.toggle("hidden", count === 0);
};

export const renderTasks = () => {
  const tasks = getTasks();
  console.log(tasks.lenght);
  console.log(tasks);

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
  console.log(tasks.lenght);

  itemsCountHandler(tasks.lenght);
  // ShowHideControls();

  ShowHideControls(tasks.lenght);

  taskList.insertAdjacentHTML("afterBegin", tasksElements);
};
