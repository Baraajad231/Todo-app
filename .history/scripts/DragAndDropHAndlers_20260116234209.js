import { getTasks, saveTasks } from "./tasksStorage";
let draggedTask = null;
let nextTask = null;
let startY = 0;
let startX = 0;
let placeholder = null;

export const startDrag = (e) => {
  if (e.target.closest(".checkbox") || e.target.closest(".remove-btn")) return;
  e.preventDefault();

  const task = e.target.closest(".task");
  if (!task) return;

  draggedTask = task;
  startY = e.clientY;
  startX = e.clientX;

  placeholder = document.createElement("div");
  placeholder.classList.add("task", "placeholder");
  placeholder.style.height = `${task.offsetHeight}px`;

  task.parentNode.insertBefore(placeholder, task.nextSibling);

  draggedTask.classList.add("dragging");
  draggedTask.style.position = "absolute";
};

export const onDrag = (e) => {
  if (!draggedTask) return;

  const dy = e.clientY - startY;
  const dx = e.clientX - startX;
  draggedTask.style.transform = `translate(${dx}px, ${dy}px)`;

  const draggingRect = draggedTask.getBoundingClientRect();
  const draggingCenterY = draggingRect.top + draggingRect.height / 2;

  const siblings = [
    ...document.querySelectorAll(".task:not(.dragging):not(.placeholder)"),
  ];

  // افتراض مبدئي أننا في نهاية القائمة
  let foundNext = false;

  for (const el of siblings) {
    const rect = el.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;

    if (draggingCenterY < centerY) {
      nextTask = el; // العنصر الذي سيصبح بعدنا
      el.parentNode.insertBefore(placeholder, el);
      foundNext = true;
      return; // خروج من الدالة لأننا وجدنا المكان
    }
  }

  // إذا وصلنا هنا، يعني لم نجد عنصراً بعدنا، إذن نحن في النهاية
  if (!foundNext) {
    nextTask = null; // مهم جداً: لا يوجد عنصر تالٍ
    placeholder.parentNode.appendChild(placeholder);
  }
};

export const endDrag = () => {
  if (!draggedTask) return;

  draggedTask.style.transform = "";
  draggedTask.classList.remove("dragging");

  placeholder.parentNode.insertBefore(draggedTask, placeholder);
  placeholder.remove();

  // نرسل العنصر المسحوب والعنصر التالي (الذي قد يكون null)
  saveArrangedTasks(draggedTask, nextTask);

  draggedTask.style.position = "";
  draggedTask = null;
  placeholder = null;
  nextTask = null;
};

// --- الدالة المصححة بالكامل ---
const saveArrangedTasks = (dragged, next) => {
  const tasks = getTasks(); // افتراض أن هذه الدالة تجلب المصفوفة
  const draggedId = Number(dragged.dataset.id);

  // 1. العثور على مكان العنصر الحالي وحذفه من المصفوفة
  const fromIndex = tasks.findIndex((t) => t.id === draggedId);
  if (fromIndex === -1) return;

  const [movedTask] = tasks.splice(fromIndex, 1); // حذفناه الآن ونحتفظ به

  // 2. تحديد أين سنضعه
  if (next === null) {
    // الحالة: تم سحبه لآخر القائمة (لا يوجد عنصر تالٍ)
    tasks.push(movedTask);
    console.log("Moved to end of list");
  } else {
    // الحالة: تم سحبه قبل عنصر معين
    const nextId = Number(next.dataset.id);
    // نبحث عن مكان العنصر التالي في المصفوفة (التي تم حذف العنصر المسحوب منها بالفعل)
    const toIndex = tasks.findIndex((t) => t.id === nextId);

    if (toIndex !== -1) {
      tasks.splice(toIndex, 0, movedTask);
      console.log(`Moved before item with index ${toIndex}`);
    } else {
      // حماية إضافية: إذا لم نجد العنصر التالي لسبب ما، نضيفه للنهاية
      tasks.push(movedTask);
    }
  }

  console.log("New tasks length: " + tasks.length);
  saveTasks(tasks); // حفظ المصفوفة الجديدة
};
