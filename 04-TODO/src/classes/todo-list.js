 export class TodoList {

     constructor(){
      this.todos = [];
     }

     nuevaTarea(tarea){
        this.todos.push(tarea);
     }

     eliminarTodo(id){
       // se puede hacer asi 
      // for (const todo of this.todos) {
      //   console.log('todo ', todo)
      //   console.log('todo.id ', todo.id)
      //   console.log('id ', id)
      //   if (todo.id == id) {
      //     todo.completado = !todo.completado
      //     break;
      //   }
      // }

      // this.todos = this.todos.filter((todo)=> todo.id != id )// return this.todos;
      this.todos =  this.todos.filter((todo)=>{

        console.log('todo ', todo)
         return todo.id != id
      });

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
      
      this.todos =  this.todos.filter((todo)=>{

         console.log('todo ', todo);
         return !todo.completado;

      });
     }


     guardarLocalStorage(){
       
     }

     cargarLocalStorage(){

     }

 }