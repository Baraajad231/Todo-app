import { renderTasks } from "./renderTasks";
import { getFilterState, saveFilterState } from "./tasksStorage";

export const allFilterHandler = () => {
  renderTasks("all");

  saveFilterState("tasksFilter", "all");
  console.log(getFilterState());
};

export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("tasksFilter", "active");
  console.log(getFilterState());
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("tasksFilter", "completed");
  console.log(getFilterState());
};
