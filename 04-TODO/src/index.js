import './styles.css';
import { TODO, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';


// const tarea = new TODO('aprender js')

export const todoList = new TodoList()
// todoList.nuevaTarea(tarea)


console.log(todoList);
console.log(todoList.todos);
todoList.todos.forEach(todo => {
    console.log([todo]);
    crearTodoHtml(todo);
});

// otra amnera 
// todoList.todos.forEach(crearTodoHtml);

// for (const todo of todoList.todos) {
//     console.log('todo for of ',todo);
//     crearTodoHtml(todo)
// }


// crearTodoHtml(tarea);


// localstorage es que la informacion almacenada en localstorage no posee tiempo de expiracion se puede cerrar o reiniciar el navegador y la data estara alli 
// session storage se borra todo cuando se cierra por completo el navgador web 
// localStorage.setItem('key','ABC');
// sessionStorage.setItem('key','ABC');
// setTimeout(() => {
//     localStorage.removeItem('key');
// }, 1500);   