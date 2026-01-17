import { renderTasks } from "./renderTasks";

export const allFilterHandler = () => {
  renderTasks("all");
  saveFilterState("all");
};

export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("active");
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("completed");
};
