import {
  activeFilter,
  completedFilter,
  itemsCount,
  taskList,
  todoStatusBar,
} from "./elements";
import { activeClassHandler } from "./filtersHandler";
import { getFilterState, getTasks } from "./tasksStorage";

export const itemsCountHandler = (count) => {
  itemsCount.textContent = count;
};

export const ShowHideControls = (count) => {
  todoStatusBar.classList.toggle("hidden", count === 0);
};

export const renderTasks = (type) => {
  let tasks = getTasks();

  const pastTasks = document.querySelectorAll(".task");
  pastTasks.forEach((task) => {
    task.remove();
  });

  if (type === "active") {
    console.log("type = active");

    let activeTasks = [];
    tasks.forEach((task) => {
      if (!task.isCompleted) {
        activeTasks.push(task);
      }
    });
    tasks = activeTasks;
    activeClassHandler(activeFilter);
  }

  if (type === "completed") {
    console.log("type = completed");

    let completedTasks = [];
    tasks.forEach((task) => {
      if (task.isCompleted) {
        completedTasks.push(task);
      }
    });
    tasks = completedTasks;
    activeClassHandler(completedFilter);
  }

  // بدنا نعمل حركة بحيث نجيب ال task المحددة الي بدنا اياها من الLC

  let tasksElements = ``;
  tasks.forEach((task, index) => {
    tasksElements += `
    <li class="todo__list__row task ${
      task.isCompleted ? "completed" : ""
    }" data-index="${index}" data-completed="${task.isCompleted}">
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
  console.log(tasks.length);

  itemsCountHandler(getTasks().length);
  ShowHideControls(getTasks().length);

  taskList.insertAdjacentHTML("afterBegin", tasksElements);
};

export const initList = () => {
  renderTasks(getFilterState());
};
