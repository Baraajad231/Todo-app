import { checkboxEvent, filtersEvent, inputTaskEvent } from "./events";
import { initList } from "./renderTasks";

inputTaskEvent();
initList();
checkboxEvent();
filtersEvent();
