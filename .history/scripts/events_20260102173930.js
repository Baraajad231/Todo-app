import { inputField } from "elements.js";

export const inputTaskEvent = () => {
  inputField.addEventListener("keydown", (e) => {
    console.log("Task Enterd");
  });
};
