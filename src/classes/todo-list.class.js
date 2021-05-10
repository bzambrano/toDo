import {Todo} from './index';

export class TodoList{

    constructor(){
        //this.todos=[];
        this.loadLocaStorage();
    }


    newTodo(todo){
        this.todos.push(todo);
        this.saveLocaStorage();
    }

    deleteTodo(id){
       this.todo = this.todos.filter(todo => todo.id != id);
       this.saveLocaStorage();
    }

    todoComplete(id){
    }

    deleteAllTodoCompleted(){
        this.todo = this.todos.filter(todo => !todo.completado);
        this.saveLocaStorage();
    }

    markCompleted(id){
        for(const todo of this.todos){
            if(todo.id  == id){
                todo.completado = ! todo.completado;
                this.saveLocaStorage();
                break;
            }
        }
    }

    saveLocaStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos) );
    }

    loadLocaStorage(){
        this.todos = (localStorage.getItem('todo'))?
            JSON.parse(localStorage.getItem('todo')):
            [];
            
        this.todos = this.todos.map( Todo.fromJsom );
    }


}