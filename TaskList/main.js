let tasks = [];
let nextId = 1;
let currentFilter = "all";

const input = document.getElementById("task-input");
const addBtn = document.getElementById("btn-add");
const taskList = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearBtn = document.getElementById("clear-done");
const taskStats = document.querySelector("ul");

function addTask() {
    const text = input.value.trim();
    if (!text) return;

    tasks.push({ id: nextId++, text, completed: false});
    input.value = "";

    saveTasks();
    render();
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});
input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    saveTasks();
    render();
}

function deleteTasks(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    render();
}

clearBtn.addEventListener("click", () => {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    render();
})

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render();
    });
});

function render() {
    const total = tasks.length;
    const done = tasks.filter(t => t.completed).length;
    const active = total - done;

    document.getElementById("total-tasks").textContent = total;
    document.getElementById("pending-tasks").textContent = active;
    document.getElementById("done-tasks").textContent = done;

    let visible = tasks;
    if(currentFilter === "pending") visible = tasks.filter(t => !t.completed);
    if (currentFilter === "done") visible = tasks.filter(t => t.completed);

    taskList.innerHTML = "";

    if (visible.length === 0) {
        const msg = document.createElement("p");
        msg.className = "empty-msg";
        msg.textContent = tasks.length === 0 ?
        "No tasks to show yet. Add your first task above!" :
        "No tasks in this category.";
        taskList.appendChild(msg);

        return;
    }

    visible.forEach(task => {
        const item = document.createElement("div");
        item.className = "task-item" + (task.completed ? " completed" : "");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(task.id));

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        const delBtn = document.createElement("button");
        delBtn.className = "btn-delete";
        delBtn.innerHTML = "&times;";
        delBtn.title = "Delete task";
        delBtn.addEventListener("click", () => deleteTasks(task.id));

        item.appendChild(checkbox);
        item.appendChild(span);
        item.appendChild(delBtn);
        taskList.appendChild(item);

    });
}


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
        nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    }
}

loadTasks();
render();
