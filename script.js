const addButton = document.getElementById('addTasks');
const clearButton = document.getElementById('clearTasks');
const itemInput = document.getElementById('Tasks');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const newItemText = itemInput.value.trim(); // Trim whitespace
    if (newItemText) {
        const listItem = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                label.classList.add('strikethrough');
            } else {
                label.classList.remove('strikethrough');
            }
        });

        // Create label
        const label = document.createElement('span'); // Changed to span for styling
        label.textContent = newItemText;
        if (checkbox.checked) {
            label.classList.add('strikethrough');
        }

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button'); // Add CSS class for styling
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button'); // Add CSS class for styling
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your task:', label.textContent);
            if (newText) {
                label.textContent = newText;
            }
        });

        // Append checkbox, label, delete button, and edit button to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        itemInput.value = '';
    } else {
        alert('Please enter a task');
    }
});

clearButton.addEventListener('click', () => {
    taskList.innerHTML = '';
});
