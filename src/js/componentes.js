//Referencias Html
import {Todo} from '../classes'
import {todoList} from '../index'


const divTodoList             = document.querySelector('.todo-list');
const txtInput                = document.querySelector('.new-todo');
const btnDeleteAllCompleted   = document.querySelector('.clear-completed');
const ulFiltros               = document.querySelector('.filters');
const anchortFiltros          = document.querySelectorAll('.filtro');
const spanCountPendingCounter = document.querySelector('.todo-count');



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

const updatePendingCounter =()=>{
    spanCountPendingCounter.innerText = `${todoList.getPending()} pendiente(s)`;
}

// Eventos
txtInput.addEventListener('keyup', (event) =>{

    if( event.keyCode === 13 && txtInput.value.length > 0 ){
        
        const nuevoTodo = new Todo( txtInput.value);
        todoList.newTodo(nuevoTodo);

        createdTodoHtml(nuevoTodo);
        txtInput.value = '';

    }updatePendingCounter();

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
        }updatePendingCounter();
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


    ulFiltros.addEventListener('click', (event) =>{

        const filtro = event.target.text;
        if(!filtro) {return} ;

        anchortFiltros.forEach(elem => elem.classList.remove('selected') );
        event.target.classList.add('selected');

        for (const elemento of divTodoList.children ) {

            elemento.classList.remove('hidden');
            const completado =  elemento.classList.contains('completed');

            switch (filtro) {
                case 'Pendientes':
                    if(completado){
                        elemento.classList.add('hidden');
                    }
                    break;

                case 'Completados':
                    if(!completado){
                        elemento.classList.add('hidden');
                    }
                    break;
            
            }
        }
    });
