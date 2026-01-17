export const startDrag = (e) => {
  const task = e.target.closest(".task");
  task.setPointerCapture(e.pointerId);

  console.log("startDrag");
};
export const onDrag = () => {
  console.log("onDrag");
};
export const endDrag = () => {
  console.log("endDrag");
};
