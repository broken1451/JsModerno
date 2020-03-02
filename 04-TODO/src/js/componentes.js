
// Referencias en el html
const divUlTodoList = document.querySelector('.todo-list');


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

    divUlTodoList.append(divUl.firstElementChild);
    return divUl.firstElementChild;
 }






