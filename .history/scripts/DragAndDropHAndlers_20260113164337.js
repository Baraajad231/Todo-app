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

  console.log(e);

  //   task.setPointerCapture(e.pointerId);
};

// نقوم بتحديد المكان الذي وصل له العنصر ثم نجعله يتحرك اليه
export const onDrag = (e) => {
  console.log("onDrag");
  if (!draggedTask) return;
  const dy = e.clientY - startY;
  draggedTask.style.transform = `translateY(${dy}px)`;
  dropAndArrangeTasks();
};
const dropAndArrangeTasks = () => {
  const siblings = [...document.querySelectorAll(".task:not(.dragging)")];

  let nextElement = null;
  for (const el in siblings) {
    const rect = draggedTask.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    if (draggingCenterY < centerY) {
      nextElement = el;
      break;
    }

    if (nextElement) {
      taskList.insertBefore(draggedTask, nextElement);
    } else {
      taskList.appendChild(draggedTask);
    }
  }
};
// نزيل التحرك و الكلاس و العنصر المسحوب
export const endDrag = (e) => {
  if (!draggedTask) return;
  draggedTask.style.transform = "";
  draggedTask.classList.remove("dragging");
  draggedTask = null;
};
