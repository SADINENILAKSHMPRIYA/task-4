document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task === '') return;

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
  loadTasks();
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const btn = document.createElement('button');
    btn.textContent = '❌';
    btn.className = 'remove-btn';
    btn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      loadTasks();
    };

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}
