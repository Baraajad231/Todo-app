import { inputField } from "./elements.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const taskInterd = inputField.textContent;
      console.log(taskInterd);
    }
  });
};
