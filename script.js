const input = document.querySelector(".input-box");
const button = document.querySelector(".add-btn");
const todo = document.querySelector(".todolist");

button.addEventListener("click",addtodo);
todo.addEventListener("click",deleteitem)

function addtodo(e)
{
    e.preventDefault();
    const tododiv=document.createElement("div")
    tododiv.classList.add("todocontainer");

    const todoitem=document.createElement("li")
    todoitem.classList.add("item");
    todoitem.innerText = input.value;
    tododiv.appendChild(todoitem);

    const deletebtn=document.createElement("button")
    deletebtn.classList.add("del-btn");
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    tododiv.appendChild(deletebtn);

    const completebutton=document.createElement("button")
    completebutton.classList.add("complete-btn");
    completebutton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    tododiv.appendChild(completebutton);
    
    todo.appendChild(tododiv);
    input.value = "";
}
function deleteitem(e)
{
    const item =e.target;
    if (item.classList[0] === "del-btn")
    {
        const del = item.parentElement;
        del.remove();
    }
    if (item.classList[0] === "complete-btn")
    {
        const del = item.parentElement;
        del.classList.toggle("completed");
    }
}