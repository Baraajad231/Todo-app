import { findTask } from "./tasksStorage";

export const checkboxHandler = (index) => {
  const taskElement = document.querySelector(`.task[data-index="${index}"]`);
  console.log(taskElement);
  taskElement?.classList.toggle("completed");

  //   ممكن نزبط ال eventListener  بحيث نخليه ع كل العنصر الاب و باستخدام بنحدد العنصر الذي تنفذ عليه الدوال الخاصة به وايضا (closest)
  //   event Delegation
  //
  const task = findTask(index);
};
