import { inputField } from "./elements.js";
import { getTasks } from "./tasksStorage.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e, index) => {
    if (e.key === "Enter") {
      const taskInterd = inputField.value;
      console.log(taskInterd);
      let tasks = getTasks("Tasks");
      tasks.push({ id: String(index), task: taskInterd, isCompleted: false });
      saveTasks(tasks);
    }
  });
};
