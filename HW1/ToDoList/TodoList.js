const { JSDOM } = require('jsdom');

const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
    <body>
        <form id="todoForm">
            <input type="text" id="todoInput" placeholder="Enter a task" required>
            <button type="submit">Add</button>
        </form>
        <ul id="todoList"></ul>
    </body>
    </html>
`);

const document = dom.window.document;

// Now you can run the same script
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

console.log("Form and tasks set up in a simulated DOM!");
