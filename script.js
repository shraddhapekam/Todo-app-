const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTask(taskText);
  taskInput.value = "";
}

function createTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskName = document.createElement("span");
  taskName.textContent = taskText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";

  completeButton.addEventListener("click", function () {
    taskName.classList.toggle("completed");

    if (taskName.classList.contains("completed")) {
      completeButton.textContent = "Undo";
    } else {
      completeButton.textContent = "Complete";
    }
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  editButton.addEventListener("click", function () {
    const newTask = prompt("Edit your task:", taskName.textContent);

    if (newTask !== null && newTask.trim() !== "") {
      taskName.textContent = newTask.trim();
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    taskDiv.remove();
  });

  taskDiv.appendChild(taskName);
  taskDiv.appendChild(completeButton);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(deleteButton);

  taskList.appendChild(taskDiv);
}
