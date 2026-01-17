import { inputField } from "./elements.js";
import { getTasks, saveTasks } from "./tasksStorage.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e, index) => {
    if (e.key === "Enter") {
      const taskInterd = inputField.value;
      console.log(taskInterd);
      let tasks = getTasks();
      tasks.push({
        id: tasks.length.toString(),
        task: taskInterd,
        isCompleted: false,
      });
      saveTasks(tasks);
    }
  });
};
