// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Add event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    createTaskElement(taskText);
    saveTask(taskText);
    taskInput.value = '';
    taskInput.focus();
}

// Function to create task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(li, taskText));
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Function to delete a task
function deleteTask(taskElement, taskText) {
    taskElement.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
        taskElement.remove();
        removeTaskFromStorage(taskText);
    }, 300);
}

// Function to save task to localStorage
function saveTask(task) {
    let tasks = getTasksFromStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to get tasks from localStorage
function getTasksFromStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

// Function to load tasks from localStorage
function loadTasks() {
    let tasks = getTasksFromStorage();
    tasks.forEach(task => createTaskElement(task));
}

// Function to remove task from localStorage
function removeTaskFromStorage(taskText) {
    let tasks = getTasksFromStorage();
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
