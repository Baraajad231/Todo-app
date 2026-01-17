export const getTasks = () => {
  const raw = localStorage.getItem("tasksList");
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasksList", JSON.stringify(tasks));
};

export const findTask = (index) => {
  const tasks = getTasks();
  return tasks[index];
};
/*  هذه الطريقة الافضل لانه ممكن الي فوق ترجع خطأ*/
// export const findTask = (index) => {
//   const tasks = getTasks();
//   console.log(index);

//   return tasks.find((task) => task.index === index);
// };

export const saveFilterState = (state) => {
  localStorage.setItem("tasksFilter", state);
};

export const getFilterState = () => {
  returnlocalStorage.getItem("tasksFilter");
};
