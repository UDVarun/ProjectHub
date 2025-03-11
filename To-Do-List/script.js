document.addEventListener('DOMContentLoaded', () => {
const task = document.getElementById('task')
const addTask = document.getElementById('addTask')
const ToDoList = document.getElementById('ToDoList')



let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((task) => renderTask(task));



addTask.addEventListener('click', ()=>{
    const textValue=task.value.trim();
    if(textValue===""){
        alert("Please enter a task");
        return 
    }
    const taskObj={
        id: Date.now(),
        text: textValue,
        completed: false
    }
    tasks.push(taskObj);
    savetask();
    renderTask(taskObj)
    task.value="";
    console.log(tasks);
})

function savetask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function renderTask(task){
console.log(task.text);
const li =document.createElement('li');
li.setAttribute('data-id', task.id);
if (task.completed){li.classList.add('completed')} 
li.innerHTML=`
<span>${task.text}</span>
<button id="delete">Delete</button>
<button id="complete">Complete</button>
`;
let completeButton = li.querySelector('#complete');
let deleteButton = li.querySelector('#delete');

completeButton.addEventListener('click', (e) => {
   if(e.target.id === 'complete'){
     task.completed = !task.completed;
    li.classList.toggle('completed');
    savetask();
    return;
   }
}
);  
deleteButton.addEventListener('click', (e) => {
    if(e.target.id === 'delete'){
    tasks = tasks.filter((task) => task.id !== task.id);
    savetask();
    li.remove();
    return;
    }
    
});
ToDoList.appendChild(li);

}


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();


}
    )