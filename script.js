const textField = document.getElementById('list');
const itemsList = document.getElementById('grocery-list');
const addButton = document.getElementById('btn-add');
const clearButton = document.getElementById('btn-clear');

addButton.addEventListener('click', () => {
    const value = textField.value.trim();
    if (value === "") return;

    const li = document.createElement('li');
    // Span for icons class
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icons');
    // Edit icon class
    const editIcon = document.createElement('ion-icon');
    editIcon.setAttribute('name', 'create-outline');
    editIcon.classList.add('icon-edit')
    // Delete icon class
    const deleteIcon = document.createElement('ion-icon');
    deleteIcon.setAttribute('name', 'trash-bin');
    deleteIcon.classList.add('icon-delete');
    // Append icons to the span tag
    iconSpan.appendChild(editIcon);
    iconSpan.appendChild(deleteIcon);

    li.textContent = value;
    
    li.appendChild(iconSpan);
    document.getElementById('grocery-list').appendChild(li);

    textField.value = '';
});

clearButton.addEventListener('click', (li) => {
    itemsList.innerHTML = '';
});

itemsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('icon-delete')) {
        const li = event.target.closest('li');
        if (li) {
            li.remove();
        }
    }

    if (event.target.classList.contains('icon-edit')) {
    const li = event.target.closest('li');
        if (li) {
            const newValue = prompt("Edit item:", li.firstChild.textContent.trim());
            if (newValue) {
                li.firstChild.textContent = newValue + " ";
            }
        }
    }
});