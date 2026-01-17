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
const addTask = () => {
  let tasks = getTasks();

  let index = tasks.length.toString();

  // اذا كان ال checkbox تاعت ال input تم الضغط عليها هذا يعني انه سيتم اضافة عنصر مكتمل
  const inputDiv = document.querySelector(".todo__input");

  tasks.push({
    taskValue: taskInterd,
    isCompleted: inputDiv.classList.contains("completed") ? true : false,
  });

  saveTasks(tasks);

  renderTasks(getFilterState());
};
