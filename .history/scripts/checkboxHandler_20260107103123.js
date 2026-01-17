import { checkboxElements } from "./elements";
import { renderTasks } from "./renderTasks";
import { findTask, getTasks, saveTasks } from "./tasksStorage";

export const checkboxHandler = (index) => {
  const tasks = getTasks();

  const task = findTask(index);
  console.log(task.);
  
  if (!task) return;

  task.isCompleted = !task.isCompleted;

  saveTasks(tasks);
  renderTasks();
};

//   ممكن نزبط ال eventListener  بحيث نخليه ع كل العنصر الاب و باستخدام بنحدد العنصر الذي تنفذ عليه الدوال الخاصة به وايضا (closest)
//   event Delegation
//   بيبقى نحدث الذاكرة
//    لا تنسى ال checkbox تاع ال input ===> وهذا يفتح باب انه تحط isCompleted > true لما بدك تظهر ال task على ال list
