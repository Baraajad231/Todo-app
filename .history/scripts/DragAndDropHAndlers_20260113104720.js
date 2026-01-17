let draggedTask = null;
let startY = 0;

export const startDrag = (e) => {
  const task = e.target.closest(".task");
  if (!task) return;

  draggedTask = task;
  startY = e.clientY;

  console.log(e);
  const currentY = e.clientY;
  console.log(currentY);

  const task = e.target.closest(".task");
  task.setPointerCapture(e.pointerId);
};
export const onDrag = () => {
  console.log("onDrag");
};
export const endDrag = () => {
  console.log("endDrag");
};
