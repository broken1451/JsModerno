import { TODO } from "../classes/index";
import {todoList} from '../index'

// Referencias en el html
const divUlTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo')

 export const crearTodoHtml = (todo)=> {

    const htmlTodo = `
    <li class= ${(todo.completado)?'completed':''} data-id=${todo.id}>
        <div class="view">
            <input class="toggle" type="checkbox"  ${(todo.completado)?'checked':''} >
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const divUl = document.createElement('div');
    divUl.innerHTML = htmlTodo;

    divUlTodoList.append(divUl.firstElementChild); // regresa el li dentro del div
    return divUl.firstElementChild;
 }


 // Eventos key code es la tecla q presiono el usuario
 txtInput.addEventListener('keyup', (event) => {
    // console.log(event);
    if (event.keyCode == 13 && txtInput.value.length > 0) {
       console.log(txtInput.value);
       const nuevoTodo = new TODO(txtInput.value);
       todoList.nuevaTarea(nuevoTodo);
       crearTodoHtml(nuevoTodo);// crea el html
       txtInput.value = '';
       console.log(todoList);
     } 
 });



