const todoForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const tasks = [];

function renderTasks() {
  taskList.textContent = "";

  tasks.forEach(function (task, index) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";

    const taskLabel = document.createElement("label");
    taskLabel.className = "todo-label";

    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.checked = task.completed;
    completeCheckbox.addEventListener("change", function () {
      task.completed = completeCheckbox.checked;
      renderTasks();
    });

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.className = "completed-task";
    }

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskLabel.append(completeCheckbox, taskText);
    listItem.append(taskLabel, deleteButton);
    taskList.appendChild(listItem);
  });
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  renderTasks();
  taskInput.focus();
});
