import { activeFilter, allFilter, completedFilter } from "./elements.js";
import { renderTasks } from "./renderTasks.js";
import { saveFilterState } from "./tasksStorage.js";

// لاظهار كل العناصر
export const allFilterHandler = () => {
  renderTasks("all");
  saveFilterState("all");
  activeClassHandler(allFilter);
};

// لاظهار العناصر الي مش ماخذة completed
export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("active");
  activeClassHandler(activeFilter);
};

// لاظهار العناصر الي ماخذة completed
export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("completed");
  activeClassHandler(completedFilter);
};

//  لازالة و اضافة ال active class
export const activeClassHandler = (element) => {
  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  element.classList.add("active");
};
