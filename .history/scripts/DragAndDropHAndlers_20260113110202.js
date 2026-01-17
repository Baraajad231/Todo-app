let draggedTask = null;
let startY = 0;

export const startDrag = (e) => {
  const task = e.target.closest(".task");
  if (!task) return;

  draggedTask = task;
  draggedTask.classList.add("dragging");
  startY = e.clientY;

  console.log(draggedTask);
  console.log(startY);

  task.setPointerCapture(e.pointerId);
};
export const onDrag = (e) => {
  console.log("onDrag");
  if (!draggedTask) return;
  const dy = e.clientY - startY;
  draggedTask.style.transform = `translateY(${dy}px)`;
  console.log(dy);
};
export const endDrag = (e) => {
  if (!draggedTask) return;
  draggedTask.style.transform = "";
  draggedTask.classList.remove("dragging");
};
