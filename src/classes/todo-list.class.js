export class TodoList{

    constructor(){
        this.todos=[];
    }


    newTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(id){
       this.todo = this.todos.filter(todo => todo.id != id);
       
    }

    todoComplete(id){

    }

    deleteAllTodoCompleted(){
        
    }

    markCompleted(id){
        for(const todo of this.todos){
            if(todo.id  == id){
                todo.completado = ! todo.completado;
                break;
            }
        }
    }



}