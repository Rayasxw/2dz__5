const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
    if (!input.value.trim()) return alert('Напиши что-нибудь')
    const div = document.createElement('div');
    const text = document.createElement('p');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const buttons = document.createElement('div')
    

    div.setAttribute("class", "block_text");
    deleteBtn.setAttribute("class", "delete_button");
    editBtn.setAttribute("class", "edit_button");
    buttons.setAttribute("class", "buttons")
    text.innerHTML = input.value;
    
    deleteBtn.innerHTML = 'delete';
    editBtn.textContent = 'edit'

    div.append(text);
    buttons.append(deleteBtn);
    buttons.append(editBtn);
    div.append(buttons);
    todoList.append(div);

    deleteBtn.onclick = () => {
        todoList.removeChild(div)
    }
    

    editBtn.onclick = () => {
        const editText = prompt("Введите новый текст для задачи:", text.innerHTML);
        if (editText) {
        text.innerHTML = editText;
        }
    }

    
    input.value = '';
};
// const inputEnter = (event) => {
//     if(event.key === 'Enter') {
//         createTodo()
//     }
// }

// input.addEventListener('keydown', inputEnter)
// input.addEventListener('keydown', (e) => {
//     if(e.key === 'Enter') createTodo()
    
// })
input.onkeydown = (e) => {
    if(e.key === 'Enter') createTodo();
}
createButton.onclick = () => createTodo();