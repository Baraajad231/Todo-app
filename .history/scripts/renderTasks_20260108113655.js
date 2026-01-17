import { itemsCount, taskList, todoStatusBar } from "./elements";
import { checkboxEvent } from "./events";
import { getTasks } from "./tasksStorage";

export const itemsCountHandler = (count) => {
  itemsCount.textContent = count;
};

export const ShowHideControls = (count) => {
  todoStatusBar.classList.toggle("hidden", count === 0);
};

export const renderTasks = (type) => {
  const tasks = getTasks();

  const pastTasks = document.querySelectorAll(".task");
  pastTasks.forEach((task) => {
    task.remove();
  });

  if (type === "all") {
    tasks = tasks;
  }
  if (type === "active") {
    let activeTasks = [];
    tasks.forEach((task) => {
      if (task.isCompleted === "false") {
        activeTasks += task;
      }
    });
    tasks = activeTasks;
  }
  if (type === "completed") {
    let completedTasks = [];
    tasks.forEach((task) => {
      if (task.isCompleted === "true") {
        completedTasks += task;
      }
    });
    tasks = completedTasks;
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

  itemsCountHandler(tasks.length);
  ShowHideControls(tasks.length);

  taskList.insertAdjacentHTML("afterBegin", tasksElements);
};

export const initList = () => {
  renderTasks(all);
};
