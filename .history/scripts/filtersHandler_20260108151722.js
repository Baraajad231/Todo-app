import { activeFilter, allFilter, completedFilter } from "./elements";
import { renderTasks } from "./renderTasks";
import { getFilterState, saveFilterState } from "./tasksStorage";

export const allFilterHandler = () => {
  renderTasks("all");

  saveFilterState("all");
  console.log(getFilterState());
  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  allFilter.classList.add("active");
  activeClassHandler(allFilter);
};

export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("active");
  console.log(getFilterState());

  activeClassHandler(activeFilter);
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("completed");
  console.log(getFilterState());

  activeClassHandler(completedFilter);
};

const activeClassHandler = (element) => {
  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  element.classList.add("active");
};
