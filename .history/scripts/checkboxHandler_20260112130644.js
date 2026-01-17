import { itemsCountHandler } from "./renderTasks";
import { findTask, getTasks, saveTasks } from "./tasksStorage";

export const checkboxHandler = (index) => {
  const taskElement = document.querySelector(`.task[data-index="${index}"]`);
  taskElement?.classList.toggle("completed");

  taskElement.classList.contains("completed")
    ? (taskElement.dataset.isCompleted = "true")
    : (taskElement.dataset.isCompleted = "false");

  const task = findTask(index);

  task.isCompleted = !task.isCompleted;

  const tasks = getTasks();
  tasks[index] = task;
  saveTasks(tasks);
  itemsCountHandler(getTasks());
};

export const checkboxinputHandler = () => {
  const inputDiv = document.querySelector(".todo__input");
  inputDiv?.classList.toggle("completed");
};

//   ممكن نزبط ال eventListener  بحيث نخليه ع كل العنصر الاب و باستخدام بنحدد العنصر الذي تنفذ عليه الدوال الخاصة به وايضا (closest)
//   event Delegation
//   بيبقى نحدث الذاكرة
//    لا تنسى ال checkbox تاع ال input ===> وهذا يفتح باب انه تحط isCompleted > true لما بدك تظهر ال task على ال list
