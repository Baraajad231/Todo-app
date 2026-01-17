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
