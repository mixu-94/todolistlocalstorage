// Elements 

const textfield = document.getElementById('textfield');
const addbutton = document.getElementById('add-button');
const todolist = document.getElementById('to-do-list');

// Create List for Todos

let list = JSON.parse(localStorage.getItem("catlist")) ? JSON.parse(localStorage.getItem("catlist")) : [];
createTodoList();

// Activate Add Button with Enter 
textfield.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    //   event.preventDefault();
      addbutton.click();
    }
  });
        
        
// Activate Add button with Click
addbutton.addEventListener('click', () => {

list.push(textfield.value)
localStorage.setItem("catlist", JSON.stringify(list));

textfield.value = "";

createTodoList();
console.log(list)

});


    





function createTodoList() {

    //Clear OLD List
    todolist.innerHTML = "";
    
    list.forEach((item, index) => { 

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

//insertInnput in P tag
todop.innerText = list[index];
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
    list.splice(index, 1);
    localStorage.setItem("catlist", JSON.stringify(list));
    console.log(list)
    createTodoList(); 
})
//  EDIT Button
buttonedit.addEventListener('click', () => { 
    
    if ( buttonedit.innerText === 'EDIT') {
    const editinput = document.createElement('input')
    todo.removeChild(todop)
    todo.appendChild(editinput);
    editinput.setAttribute('class', 'textfield-edit');
    editinput.setAttribute('id', 'editinput');
    editinput.focus();
    editinput.value = list[index];
    buttonedit.innerText = 'SAVE';
    


// Activate Enter Button for Save button

    editinput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        //   event.preventDefault();
          buttonedit.click();
        }
      });

// SAVE Button

    } else if ( buttonedit.innerText === 'SAVE' ) {
    const editinput = document.getElementById('editinput')
        let newtext = editinput.value;
        todo.removeChild(editinput)
        todo.appendChild(todop);
        list[index] = newtext;
        localStorage.setItem("catlist", JSON.stringify(list));
        todop.innerText = list[index]
        buttonedit.innerText = 'EDIT';
        todop.style.textDecoration = "none"

    }
    console.log(list);
})



    







})}

