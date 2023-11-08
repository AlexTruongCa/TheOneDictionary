// workbook.js
let todos = [];

const addTodo = (task) => {
  render();
};

const completeTodo = (index) => {
  render();
};

const deleteTodo = (index) => {
  render();
};

const render = () => {
  const todoList = todos.map((todo, index) => ``).join('');

  document.getElementById('workbookResult').innerHTML = `
    <input type="text" id="taskInput" />
    <button onclick="">Add Task</button>
    <ul>${todoList}</ul>
  `;
};

render();
