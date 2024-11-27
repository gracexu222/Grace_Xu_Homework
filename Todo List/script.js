// Select elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Handle form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const taskText = todoInput.value.trim(); // Get and trim input value
    if (taskText) {
        addTask(taskText); // Add task to the list
        todoInput.value = ''; // Clear input field
    }
});

// Function to add a new task
function addTask(taskText) {
    const li = document.createElement('li'); // Create list item

    // Checkbox for marking task as done
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    // Text span to hold the task
    const taskSpan = document.createElement('span');
    taskSpan.textContent = ` ${taskText} `;

    // Delete button to remove task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // Append the list item to the unordered list
    todoList.appendChild(li);
}
