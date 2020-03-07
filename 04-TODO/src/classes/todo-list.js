 export class TodoList {

     constructor(){
      this.todos = [];
      this.cargarLocalStorage();
     }

     nuevaTarea(tarea){
        this.todos.push(tarea);
        this.guardarLocalStorage()
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

     
      this.guardarLocalStorage()

     }

    //  marcarCompletado(tarea){
     marcarCompletado(id){

      for (const todo of this.todos) {
        console.log('todo ', todo)
        console.log('todo.id ', todo.id)
        console.log('id ', id)
        if (todo.id == id) {
          todo.completado = !todo.completado;
          this.guardarLocalStorage()
          break;
        }
      }
      
     }

     eliminarCompletados(){
      
      this.todos =  this.todos.filter((todo)=>{
         console.log('todo ', todo);
         return !todo.completado;
      });
      this.guardarLocalStorage()
     }


     guardarLocalStorage(){
       localStorage.setItem('todos', JSON.stringify(this.todos));
    }

     cargarLocalStorage(){
        // if (localStorage.getItem('todos')) {
        //   this.todos = JSON.parse(localStorage.getItem('todos'));
        //   console.log('this.todos ', this.todos);
        // } else {
        //   this.todos = [];
        // }

      this.todos = (localStorage.getItem('todos')) 
                    ? this.todos = JSON.parse(localStorage.getItem('todos'))
                    : this.todos = [];

      console.log('this.todos ', this.todos);
     }

 }