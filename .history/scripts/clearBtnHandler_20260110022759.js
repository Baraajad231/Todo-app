import { getTasks } from "./tasksStorage";

export const clearBtnHandler = () => {
  const tasks = getTasks();
  tasks.forEach((task) => {
    if (task.isCompleted) {
      task.remove;
    }
  });
  console.log("From Handler");
};
