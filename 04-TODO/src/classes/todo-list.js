 export class TodoList {

     constructor(){
      this.todos = [];
     }

     nuevaTarea(tarea){
        this.todos.push(tarea);
     }

     eliminarTodo(id){
        
     }

    //  marcarCompletado(tarea){
     marcarCompletado(id){

      for (const todo of this.todos) {
        console.log('todo ', todo)
        console.log('todo.id ', todo.id)
        console.log('id ', id)
        if (todo.id == id) {
          todo.completado = !todo.completado
          break;
        }
      }
      
     }

     eliminarCompletados(){
      
     }

 }