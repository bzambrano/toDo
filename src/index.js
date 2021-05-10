import './styles.css';
import {Todo,TodoList} from './classes';
import {createdTodoHtml} from './js/componentes'; 

export const todoList = new TodoList();

//todoList.todos.forEach(todo => createdTodoHtml( todo ));
todoList.todos.forEach( createdTodoHtml);// esta es la forma corta de la sentencia anterior
 