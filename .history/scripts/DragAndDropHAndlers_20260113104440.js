export const startDrag = (e) => {
  console.log(e);

  const task = e.target.closest(".task");
  task.setPointerCapture(e.pointerId);
};
export const onDrag = () => {
  console.log("onDrag");
};
export const endDrag = () => {
  console.log("endDrag");
};
