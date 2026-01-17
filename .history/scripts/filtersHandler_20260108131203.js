import { renderTasks } from "./renderTasks";
import { saveFilterState } from "./tasksStorage";

export const allFilterHandler = () => {
  renderTasks("all");
  saveFilterState("tasksFilter", "all");
};

export const activeFilterHandler = () => {
  renderTasks("active");
  saveFilterState("tasksFilter", "active");
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  saveFilterState("tasksFilter", "completed");
};
