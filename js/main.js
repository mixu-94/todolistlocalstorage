// Elements 

const textfield = document.getElementById('textfield');
const addbutton = document.getElementById('add-button');
const todolist = document.getElementById('to-do-list');

// Add button

addbutton.addEventListener('click', () => {
//createElement
  const todocontainer = document.createElement('div')
  const todo = document.createElement('div');
  const todop = document.createElement('p');
  const buttonedit = document.createElement('button');
  const buttondelete = document.createElement('button');
//appendChild
  todolist.appendChild(todocontainer);
  todocontainer.appendChild(todo);
  todo.appendChild(todop);
  todocontainer.appendChild(buttonedit);
  todocontainer.appendChild(buttondelete);
// setAttribute  
  todocontainer.setAttribute('class', 'todo-container');
  todo.setAttribute('class', 'todo');
  buttonedit.setAttribute('class', 'edit-button')
  buttondelete.setAttribute('class', 'delete-button')
//insetButtonText
buttondelete.innerText = 'DELETE';
buttonedit.innerText = 'EDIT'
//insertInput
  todop.innerText = textfield.value;
  textfield.value = "";
//check
let isline = false;
todo.addEventListener('click', () => {
    isline = !isline
    if (isline && buttonedit.innerText === 'EDIT') {
    todop.style.textDecoration = "line-through"
    } else {
    todop.style.textDecoration = "none"
    }});
//deletebutton
buttondelete.addEventListener('click', () => { 
    alert('Are you sure you want to delete this item?'); 
    todocontainer.remove(todo)

})
//editbutton
buttonedit.addEventListener('click', () => { 
    
    if ( buttonedit.innerText === 'EDIT') {
    const editinput = document.createElement('input');
    todo.removeChild(todop)
    todo.appendChild(editinput);
    editinput.setAttribute('class', 'textfield-edit');
    editinput.setAttribute('id', 'editinput');
    buttonedit.innerText = 'SAVE';
    } else if ( buttonedit.innerText === 'SAVE' ) {
    const editinput = document.getElementById('editinput')
        let newtext = editinput.value;
        todo.removeChild(editinput)
        todo.appendChild(todop);
        todop.innerText = newtext;
        buttonedit.innerText = 'EDIT';

    }
    

    

})







});