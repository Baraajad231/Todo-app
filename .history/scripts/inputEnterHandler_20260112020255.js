export const inputEnterHandler = () => {
  if (!e.key === "Enter") return;
  const taskInterd = inputField.value.trim();
  if (taskInterd) {
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

    //  اعادة تهيئة الcheckbox الخاص بالادخال
    inputDiv.classList.remove("completed");
    inputField.value = "";
  } else {
    inputField.value = "";
  }
};
