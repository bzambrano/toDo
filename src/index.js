import './styles.css';
import {Todo,TodoList} from './classes';
import {createdTodoHtml} from './js/componentes'; 

export const todoList = new TodoList();

const tast = new Todo('Estudiar js!!!!');
todoList.newTodo(tast);
console.log(todoList);


createdTodoHtml(tast);