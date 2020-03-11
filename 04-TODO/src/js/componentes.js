import { TODO } from "../classes/index";
import {todoList} from '../index'

// Referencias en el html
const divUlTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const botonBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const arconFiltros = document.querySelectorAll('.filtro');

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
     } else if (nombreElemento.includes('button')) { // borrar el elemento
        todoList.eliminarTodo(todoId);
        divUlTodoList.removeChild(todoElemento);
     }

     console.log(todoList);
         
 })

 botonBorrar.addEventListener('click', ()=> {
   todoList.eliminarCompletados();

   for (let i = divUlTodoList.children.length-1; i>=0; i--){

      const element = divUlTodoList.children[i];
      console.log('element for inverso ', element);
      console.log(todoList);

      
      if (element.classList.contains('completed')) {
         divUlTodoList.removeChild(element);
      }

   }



 });

 ulFiltros.addEventListener('click', (event) => {
   console.log(event)
   console.log(event.target.text) // saber q es 

   const filtro = event.target.text;

   if (!filtro) {
      return
   }

   console.log('arconFiltros: ', arconFiltros);
   arconFiltros.forEach((element)=>{
      console.log('element: ', element);
      element.classList.remove('selected');
   });
   console.log('event.target: ', event.target);
   const linksArcontac = event.target; 
   linksArcontac.classList.add('selected')

   console.warn(divUlTodoList.children)
   for (const element of divUlTodoList.children) {
      console.log(element);
      console.log('element.classList: ', element.classList);

      element.classList.remove('hidden');
      const completado =  element.classList.contains('completed');

      switch (filtro) {
         case 'Pendientes':
            if (completado) {
               element.classList.add('hidden')
            }
         break;
         case 'Completados':
            if (!completado) {   
               element.classList.add('hidden')
            }
         break;
         default:
         break;
      }
      console.log('completado', completado);
   }


 });