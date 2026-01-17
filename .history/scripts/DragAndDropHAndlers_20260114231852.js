import { renderTasks } from "./renderTasks";
import { getFilterState, getTasks, saveTasks } from "./tasksStorage";

let draggedTask = null;
let nextTask = null;
let startY = 0;
let startX = 0;
let placeholder = null;

// نضيف كلاس عشان يبين ان العنصر يتم سحبه ثم نحدد العنصر المسكحوب و ايضا المكان الذي سحب منه
export const startDrag = (e) => {
  if (e.target.closest(".checkbox") || e.target.closest(".remove-btn")) return;
  e.preventDefault();

  const task = e.target.closest(".task");
  if (!task) return;

  draggedTask = task;
  startY = e.clientY;
  startX = e.clientX;

  // إنشاء placeholder بنفس ارتفاع العنصر
  placeholder = document.createElement("div");
  placeholder.classList.add("task", "placeholder");
  placeholder.style.height = `${task.offsetHeight}px`;

  // وضع placeholder مكان العنصر
  task.parentNode.insertBefore(placeholder, task.nextSibling);

  draggedTask.classList.add("dragging");
  draggedTask.style.position = "absolute";
};

// نقوم بتحديد المكان الذي وصل له العنصر ثم نجعله يتحرك اليه
export const onDrag = (e) => {
  console.log("before the condition");

  if (!draggedTask) return;

  //     خليتها تتحرك بال x,y
  const dy = e.clientY - startY;
  //   draggedTask.style.transform = `translateY(${dy}px)`;
  const dx = e.clientX - startX;
  draggedTask.style.transform = `translate(${dx}px, ${dy}px)`;

  const draggingRect = draggedTask.getBoundingClientRect();
  const draggingCenterY = draggingRect.top + draggingRect.height / 2 + dy / 2;

  const siblings = [
    ...document.querySelectorAll(".task:not(.dragging):not(.placeholder)"),
  ];

  for (const el of siblings) {
    const rect = el.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;

    if (draggingCenterY < centerY) {
      nextTask = el;
      el.parentNode.insertBefore(placeholder, el);
      return;
    }
  }

  // إذا وصل لآخر القائمة
  placeholder.parentNode.appendChild(placeholder);
};

// نزيل التحرك و الكلاس و العنصر المسحوب
export const endDrag = () => {
  if (!draggedTask) return;
  saveArrangedTasks(draggedTask, nextTask);

  draggedTask.style.transform = "";
  draggedTask.classList.remove("dragging");

  // وضع العنصر مكان الـ placeholder
  placeholder.parentNode.insertBefore(draggedTask, placeholder);
  placeholder.remove();

  draggedTask.style.position = "";

  draggedTask = null;
  placeholder = null;
  nextTask = null;
};

const saveArrangedTasks = (dragged, next) => {
  const tasks = getTasks();
  let draggedTaskIndex = tasks.findIndex(
    (task) => task.id === parseInt(dragged.dataset.id)
  );
  let nextTaskIndex = tasks.findIndex(
    (task) => task.id === parseInt(next.dataset.id)
  );
  let draggedTask = tasks.find(
    (task) => task.id === parseInt(dragged.dataset.id)
  );
  let nextTask = tasks.find((task) => task.id === parseInt(next.dataset.id));

  console.log(draggedTaskIndex);
  console.log(draggedTask);

  console.log(nextTaskIndex);
  console.log(nextTask);

  //    ممكن استخدم tasks.findIndex للعثور على الفهرس تاع الرقم ولكن ليس لارجاع قيمة , لارجاع قيمة ممكن نتسخدم find
  //   tasks.forEach((task, index) => {
  //     if (task.id === parseInt(dragged.dataset.id)) {
  //       draggedTaskIndex = index;
  //       draggedTask = task;
  //     } else if (task.id === parseInt(next.dataset.id)) {
  //       nextTaskIndex = index;
  //     }
  //   });
  tasks.splice(draggedTaskIndex, 1);

  tasks.splice(nextTaskIndex, 0, draggedTask);

  saveTasks(tasks);
};

// احنا عدلنا على العناصر الي ظاهرة بالسحب و الافلات في ال UI فلذلك جبنا التعديل من هناك ثم وضعناه في ال LS
// تركت خطأ في التعامل مع ال حيث يتم اخذ العناصر الظاهر خسب ال فلتر بعين الاعتبار و الباقي يتم مسحه
