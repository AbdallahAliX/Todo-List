const todoList = JSON.parse(localStorage.getItem('todoList'));

renderingList();

function renderingList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const name =todo.name;
    const dueDate = todo.dueDate;
    const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button class="delete-button" onclick="
    todoList.splice(${i},1);
    renderingList();
  ">Delete</button>
  `

    todoListHTML += html;

  }
 document.querySelector('.js-list-html').innerHTML = todoListHTML;
}

function addingToList() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  const dueDate = document.querySelector('.js-date-input').value;

  todoList.push({
    name,
    dueDate
  });
  localStorage.setItem('todoList', JSON.stringify(todoList));
  inputElement.value = '';
  document.querySelector('.js-date-input').value = '';
  renderingList();
}

