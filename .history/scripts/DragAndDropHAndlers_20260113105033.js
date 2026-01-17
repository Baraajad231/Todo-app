let draggedTask = null;
let startY = 0;

export const startDrag = (e) => {
  const task = e.target.closest(".task");
  if (!task) return;

  draggedTask = task;
  startY = e.clientY;

  console.log(draggedTask);
  console.log(startY);

  task.setPointerCapture(e.pointerId);
};
export const onDrag = () => {
  console.log("onDrag");
  if (!draggedTask) return;
  const dy = e.clientY - startY;
};
export const endDrag = () => {
  console.log("endDrag");
};
