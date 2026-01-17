import { taskList } from "./elements";

let draggedTask = null;
let startY = 0;

// نضيف كلاس عشان يبين ان العنصر يتم سحبه ثم نحدد العنصر المسكحوب و ايضا المكان الذي سحب منه
export const startDrag = (e) => {
  e.preventDefault();
  const task = e.target.closest(".task");
  if (!task) return;

  draggedTask = task;
  draggedTask.classList.add("dragging");
  startY = e.clientY;

  //   task.setPointerCapture(e.pointerId);
};

// نقوم بتحديد المكان الذي وصل له العنصر ثم نجعله يتحرك اليه
export const onDrag = (e) => {
  if (!draggedTask) return;
  const dy = e.clientY - startY;
  draggedTask.style.transform = `translateY(${dy}px)`;
  /*Drop and arrange items */
  const draggingRect = draggedTask.getBoundingClientRect();
  const draggingCenterY = draggingRect.top + draggingRect.height / 2 + dy;

  const siblings = [...document.querySelectorAll(".task:not(.dragging)")];

  let nextElement = null;

  for (const el of siblings) {
    const rect = el.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;

    if (draggingCenterY < centerY) {
      nextElement = el;
      break;
    }
  }

  if (nextElement) {
    taskList.insertBefore(draggedTask, nextElement);
    console.log(nextElement);
  } else {
    console.log("there is not nextElement");

    taskList.appendChild(draggedTask);
  }
  nextElement = null;
};
const dropAndArrangeTasks = () => {};
// نزيل التحرك و الكلاس و العنصر المسحوب
export const endDrag = (e) => {
  if (!draggedTask) return;
  draggedTask.style.transform = "";
  draggedTask.classList.remove("dragging");
  draggedTask = null;
};
