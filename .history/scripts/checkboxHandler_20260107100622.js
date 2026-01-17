import { findTask, getTasks, saveTasks } from "./tasksStorage";

export const checkboxHandler = (index) => {
  const taskElement = document.querySelector(`.task[data-index="${index}"]`);
  console.log(taskElement);
  taskElement?.classList.toggle("completed");

  taskElement.dataset.isCompleted = "true";

  //   ممكن نزبط ال eventListener  بحيث نخليه ع كل العنصر الاب و باستخدام بنحدد العنصر الذي تنفذ عليه الدوال الخاصة به وايضا (closest)
  //   event Delegation
  //   بيبقى نحدث الذاكرة
  //    لا تنسى ال checkbox تاع ال input ===> وهذا يفتح باب انه تحط isCompleted > true لما بدك تظهر ال task على ال list

  const task = findTask(index);
  taskElement.classList.contains("completed")
    ? (task.isCompleted = true)
    : (task.isCompleted = false);

  const tasks = getTasks();
  tasks[index] = task;
  saveTasks(tasks);
};
