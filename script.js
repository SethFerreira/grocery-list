const textField = document.getElementById('list');
const itemsList = document.getElementById('grocery-list');
const addButton = document.getElementById('btn-add');
const clearButton = document.getElementById('btn-clear');

addButton.addEventListener('click', () => {
    const value = textField.value.trim();
    if (value === "") return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    const editIcon = document.createElement('ion-icon');
    const deleteIcon = document.createElement('ion-icon');

    editIcon.setAttribute('name', 'create-outline');
    deleteIcon.setAttribute('name', 'trash-bin');

    editIcon.classList.add('icon-edit');
    deleteIcon.classList.add('icon-delete');

    li.textContent = value;

    span.appendChild(editIcon);
    span.appendChild(deleteIcon);
    li.appendChild(span);
    itemsList.appendChild(li);

    textField.value = " ";
});

itemsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-edit')) {
        const li = e.target.closest('li');
        if (li) {
            const newValue = prompt("Edit item:", li.textContent.trim());
            if (newValue) {
                li.textContent = newValue;
            }
        }
    }

    if (e.target.classList.contains('icon-delete')) {
        const li = e.target.closest('li');
        if (li) {
            li.remove();
        }
    }
});

clearButton.addEventListener('click', () => {
    itemsList.innerHTML = "";
});
