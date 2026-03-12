let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){

let taskList = document.getElementById("taskList");
taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li = document.createElement("li");
li.innerHTML = task + " <button class='delete' onclick='deleteTask("+index+")'>Delete</button>";

taskList.appendChild(li);

});

}

function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task===""){
alert("Please enter a task");
return;
}

tasks.push(task);

localStorage.setItem("tasks",JSON.stringify(tasks));

input.value="";

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

}

displayTasks();