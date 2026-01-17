import { renderTasks } from "./renderTasks";

export const allFilterHandler = () => {
  renderTasks("all");
  console.log("from all handler");
};

export const activeFilterHandler = () => {
  renderTasks("active");
  console.log("from active handler");
};

export const completedFilterHandler = () => {
  renderTasks("completed");
  console.log("from completed handler");
};
