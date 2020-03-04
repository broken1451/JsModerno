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



 divUlTodoList.addEventListener('click', (event)=>{
    console.log(event);
    console.log(event.target);// indica a que se le hizo click
    console.log(event.target.localName);// saber q elemento fue exactamente
    console.log(event.target.parentElement);// obtener el elemento  refrencia
    console.log(event.target.parentElement.parentElement);// obtener refrencia el elemento 
    
    const nombreElemento = event.target.localName;// inpu, label, button- saber q elemento fue exactamente
    const todoElemento = event.target.parentElement.parentElement;// obtener el elemento 
    const todoId = todoElemento.getAttribute('data-id');// para obtener el atributo q nos interesa
    console.log('todoElemento ', todoElemento);
    console.log(todoId);

     if (nombreElemento.includes('input')) { // hizo click en el input, si este elemento incluye algo llamado input 
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); // anadir o quitar una clase,
     }

     console.log(todoList);

 })