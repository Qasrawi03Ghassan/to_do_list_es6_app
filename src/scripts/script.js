import {
  input,
  addTask,
  clearCompletedTasks,
  renderTasks,
} from "./modules/tasks.js";
import arrsObjs from "./modules/arrs-objs.js";

const addBtn = document.getElementById("addBtn");
const clearCompleted = document.getElementById("clearCompleted");

/*function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}*/
/*function renderTasks() {
  duties.innerHTML = "";

  if (tasks.length === 0) {
    duties.innerHTML = `
      <div class="empty-state">
        <p>No tasks yet. Add something you need to get done.</p>
      </div>
    `;

    updateTaskCount();
    return;
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <div class="task-content">
        <button
          class="check-btn"
          type="button"
          aria-label="Mark task as done"
        >
          ✓
        </button>

        <p></p>
      </div>

      <button
        class="remove-btn"
        type="button"
        title="Remove task"
        aria-label="Remove task"
      >
        ×
      </button>
    `;

    li.querySelector(".task-content p").textContent = task.text;

    li.querySelector(".check-btn").addEventListener("click", () => {
      toggleTask(task.id);
    });

    li.querySelector(".remove-btn").addEventListener("click", () => {
      removeTask(task.id);
    });

    duties.appendChild(li);
  });

  updateTaskCount();
}*/
/*function addTask() {
  const text = input.value.trim();

  if (text === "") {
    input.focus();
    return;
  }

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false,
  });

  input.value = "";

  saveTasks();
  renderTasks();

  input.focus();
}*/
/*function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
}*/
/*function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();
  renderTasks();
}*/
/*function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);

  saveTasks();
  renderTasks();
}*/
/*function updateTaskCount() {
  const remaining = tasks.filter((task) => !task.completed).length;

  if (remaining === 0) {
    taskCount.textContent = "All tasks completed 🎉";
    return;
  }

  taskCount.textContent =
    remaining === 1 ? "1 task remaining" : `${remaining} tasks remaining`;
}*/

addBtn.addEventListener("click", addTask);
clearCompleted.addEventListener("click", clearCompletedTasks);
input.addEventListener("keydown", (event) => {
  input.classList.remove("error-placeholder");
  input.placeholder = "What needs to be done?";
  if (event.key === "Enter") {
    addTask();
  }
});
renderTasks();

console.log(
  arrsObjs.a,
  arrsObjs.b,
  arrsObjs.c,
  arrsObjs.d,
  arrsObjs.v,
  arrsObjs.id,
  arrsObjs.name,
  arrsObjs.service,
  arrsObjs.valid,
  arrsObjs.ssn,
  arrsObjs.occupation,
);
//===================================
console.log(arrsObjs.combined);

let sum = (...args) => {
  let s = 0;
  for (let num of args) {
    s += num;
  }
  return s;
};
console.log(sum(100, 200, 300, 400));
