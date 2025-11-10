document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() 
{
  const addButton = document.getElementById("addBtn");
  const taskInput = document.getElementById("task");

  addButton.addEventListener("click", addBtnClick);

  taskInput.addEventListener("keyup", function(event) 
  {
    if (event.key === "Enter") 
    {
    addBtnClick();
    }
  });
  taskInput.focus();
}

function addBtnClick() 
{
  const taskInput = document.getElementById("task");
  const newTask = taskInput.value.trim();
  if (newTask !== "") 
{
    addTask(newTask);
    taskInput.value = ""; 
    taskInput.focus();      
}
}

function addTask(taskText) 
{
  const newListItem = document.createElement("li");
  newListItem.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;
  const taskList = document.getElementById("taskList");
  taskList.appendChild(newListItem);
}

function addTask(taskText) 
{
const newItem = document.createElement("li");
newItem.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

const taskList = document.querySelector("ol");
if (!taskList) 
{
console.error("Task list not found.");
return;
}

taskList.appendChild(newItem);

const doneButtons = document.querySelectorAll(".done-btn");
const lastButton = doneButtons[doneButtons.length - 1];
lastButton.addEventListener("click", removeTask);
}

function removeTask(event) 
{
const li = event.target.parentNode;
const ol = li.parentNode;
ol.removeChild(li);
}