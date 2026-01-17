import { renderTasks } from "./renderTasks";

export const allFilterHandler = () => {
  renderTasks(all);
};

export const activeFilterHandler = () => {
  renderTasks(active);
};

export const completedFilterHandler = () => {
  renderTasks(completed);
};
