export const inputEnterHandler = () => {
  if (e.key !== "Enter") return;

  const taskValue = inputField.value.trim();
  if (!taskValue) {
    inputField.value = "";
    return;
  }

  addTask(taskValue);
  resetInput();
};
