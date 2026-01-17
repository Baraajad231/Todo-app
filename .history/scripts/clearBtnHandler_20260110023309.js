import { getTasks } from "./tasksStorage";

export const clearBtnHandler = () => {
  const tasks = getTasks();
  let remainingTasks = [];
  tasks.forEach((task) => {
    if (!task.isCompleted) {
      remainingTasks.push(task);
    }
  });
  console.log("From Handler");
};
