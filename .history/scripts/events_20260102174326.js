import { inputField } from "./elements.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e) => {
    const taskInterd = inputField.textContent;
    console.log(taskInterd);
  });
};
