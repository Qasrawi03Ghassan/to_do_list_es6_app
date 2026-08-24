const input = document.getElementById("elemField");
const addBtn = document.getElementById("addBtn");
const duties = document.querySelector("#duties ul");
const taskCount = document.getElementById("taskCount");
const clearCompleted = document.getElementById("clearCompleted");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

const saveTasks = () => {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
};

const renderTasks = () => {
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
};

const addTask = () => {
  const text = input.value.trim();

  if (text === "") {
    input.focus();
    input.placeholder = "Please add an element first!";
    input.classList.add("error-placeholder");
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
  alert(`Element '${text}' will be added to the list`);
};

const toggleTask = (id) => {
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
};

const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();
  renderTasks();
};

const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
};

const updateTaskCount = () => {
  const remaining = tasks.filter((task) => !task.completed).length;

  if (remaining === 0) {
    taskCount.textContent = "All tasks completed 🎉";
    return;
  }

  taskCount.textContent =
    remaining === 1 ? "1 task remaining" : `${remaining} tasks remaining`;
};

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
