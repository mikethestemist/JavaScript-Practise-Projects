
const taskInput = document.querySelector('#task_input');
const tasks = document.querySelector('#tasks');
const checkboxes = document.querySelectorAll('input');

taskInput.addEventListener('keydown', (e) => { if (e.key == 'Enter') addToTasks() });

// let tasksData = {};

// function enableCheckedBoxes() {
//     for (let x of tasks) {
//         // let checkbox = x.children[0];
//         // if(checkbox.checked) console.log('checked');// checkbox.nextElementSibling.style.textDecoration = 'line-through';
//         // else checkbox.nextElementSibling.style.textDecoration = 'none';
//         console.log(x);
//     }
// }
// enableCheckedBoxes();
function addToTasks() {

    if (taskInput.value)
    // alert('Working');
    {
        let key = Math.floor(Math.random() * 1e6);
        let value = taskInput.value.charAt(0).toUpperCase() + taskInput.value.slice(1);
        const task = `<span class="task" id="${key}">
    <input type="checkbox" class="checkbox" name="task" id="task_${key}">
    <span>${value}</span>
    <button onclick="editTask(e)" class="edit_button">Edit</button>
    <button onclick="deleteTask()" class="del_button">Delete</button>
</span>`

        // console.log(tasks);
        tasks.innerHTML = task + tasks.innerHTML;
        // .appendChild(task);
        taskInput.value = '';
        tasksData[key] = value;

    taskInput.focus();

    
}
}

window.addEventListener('click', (e) => { if (e.target.className == 'del_button') deleteTask(e) });
window.addEventListener('click', (e) => { if (e.target.className == 'edit_button') editTask(e) });



function deleteTask(e) {
    
    const clickedTask = e.target.parentElement;

    // const del = confirm('Do you want to delete that task?');
    // if (del) {
    let updatedTasks = [];
    for (let i of tasks.children) {
        if (i.getAttribute('id') != clickedTask.id) {
            updatedTasks.push(i)
        };

    }
    tasks.innerHTML = '';
    for (let task of updatedTasks) tasks.appendChild(task);
    // }
    taskInput.focus();
}
function removeFromTasks() { }

function editTask(e) {
    const clickedTask = e.target.parentElement;

    taskInput.value = clickedTask.children[1].innerText;
    taskInput.focus();
    clickedTask.children[3].click();

}

