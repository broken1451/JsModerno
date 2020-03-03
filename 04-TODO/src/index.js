import './styles.css';
import { TODO, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';


const tarea = new TODO('aprender js')
export const todoList = new TodoList()
todoList.nuevaTarea(tarea)




console.log(todoList);

crearTodoHtml(tarea);
