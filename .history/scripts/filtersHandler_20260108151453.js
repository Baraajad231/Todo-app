import { allFilter, completedFilter } from "./elements";
import { renderTasks } from "./renderTasks";
import { getFilterState, saveFilterState } from "./tasksStorage";

export const allFilterHandler = () => {
  renderTasks("all");

  saveFilterState("all");
  console.log(getFilterState());
  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  allFilter.classList.add("active");
};

export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("active");
  console.log(getFilterState());

  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  activeFilter.classList.add("active");
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("completed");
  console.log(getFilterState());

  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");

  completedFilter.classList.add("active");
};
