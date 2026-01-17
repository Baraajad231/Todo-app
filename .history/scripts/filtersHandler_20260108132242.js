import { renderTasks } from "./renderTasks";
import { getFilterState, saveFilterState } from "./tasksStorage";

export const allFilterHandler = () => {
  renderTasks("all");

  saveFilterState("all");
  console.log(getFilterState());
};

export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("active");
  console.log(getFilterState());
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("completed");
  console.log(getFilterState());
};
