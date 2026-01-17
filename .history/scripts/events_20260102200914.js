import { inputField } from "./elements.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e, index) => {
    if (e.key === "Enter") {
      const taskInterd = inputField.value;
      console.log(taskInterd);
      let tasks = getFromLS("Tasks");
    }
  });
};
