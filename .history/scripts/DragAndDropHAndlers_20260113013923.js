export const startDrag = (e) => {
  task.setPointerCapture(e.pointerId);

  console.log("startDrag");
};
export const onDrag = () => {
  console.log("onDrag");
};
export const endDrag = () => {
  console.log("endDrag");
};
