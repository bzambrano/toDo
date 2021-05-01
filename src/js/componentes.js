//Referencias Html
import {Todo} from '../classes'
import {todoList} from '../index'


const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnDeleteAllCompleted   = document.querySelector('.clear-completed');

export const createdTodoHtml =(todo) => {


    const htmlTodo =
    `
    <li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// Eventos
txtInput.addEventListener('keyup', (event) =>{

    if( event.keyCode === 13 && txtInput.value.length > 0 ){
        
        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value);
        todoList.newTodo(nuevoTodo);

        createdTodoHtml(nuevoTodo);
        txtInput.value = '';

    }

});

 divTodoList.addEventListener('click',(event)=>{

        const nombreElemento = event.target.localName; //input, label, button
        const todoElemento   = event.target.parentElement.parentElement;
        const todoId         = todoElemento.getAttribute ('data-id');
        
        if(nombreElemento.includes('input')){

            todoList.markCompleted(todoId);
            todoElemento.classList.toggle('completed');

        }else if(nombreElemento.includes('button')){

            todoList.deleteTodo(todoId);
            divTodoList.removeChild(todoElemento);
        }
    });

    btnDeleteAllCompleted.addEventListener('click',()=>{

        todoList.deleteAllTodoCompleted();
        for(let i = divTodoList.children.length-1; i >= 0 ; i-- ){

            const elemet = divTodoList.children[i];
         
            if( elemet.classList.contains( 'completed' )){
                divTodoList.removeChild(elemet);
            }
        }
        
    });