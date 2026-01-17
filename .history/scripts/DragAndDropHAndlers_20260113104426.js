export const startDrag = (e) => {
  const task = e.target.closest(".task");
  const y = e.clintY;
  task.setPointerCapture(e.pointerId);
};
export const onDrag = () => {
  console.log("onDrag");
};
export const endDrag = () => {
  console.log("endDrag");
};
