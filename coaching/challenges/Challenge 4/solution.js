// workbook.js
let solutionTodos = [];

const solutionAddTodo = (task) => {
  solutionTodos.push({ task, completed: false });
  solutionRender();
};

const solutionCompleteTodo = (index) => {
  solutionTodos[index].completed = true;
  solutionRender();
};

const solutionDeleteTodo = (index) => {
  solutionTodos = solutionTodos.filter((_, i) => i !== index);
  solutionRender();
};

const solutionRender = () => {
  const todoList = solutionTodos.map((todo, index) => `
    <li>
      <span ${todo.completed ? 'style="text-decoration: line-through;"' : ''}>${todo.task}</span>
      <button onclick="solutionCompleteTodo(${index})">Complete</button>
      <button onclick="solutionDeleteTodo(${index})">Delete</button>
    </li>
  `).join('');

  document.getElementById('solutionResult').innerHTML = `
    <input type="text" id="solutionTaskInput" />
    <button onclick="solutionAddTodo(document.getElementById('solutionTaskInput').value)">Add Task</button>
    <ul>${todoList}</ul>
  `;
};

solutionRender();
