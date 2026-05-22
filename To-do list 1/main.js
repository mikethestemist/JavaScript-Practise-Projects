// # changing background

const body = document.querySelector('body');
let i = 1;

body.style.background = `url('Images/background (${i}).jpg') no-repeat center center /cover`;

setInterval(function() {

    body.style.background = `url('Images/background (${i++}).jpg') no-repeat center center /cover`;

    if (i > 4) {
        i = 1;
    } else {
        i = i++;
    }

}, 15000);






// # adding tasks
const input = document.querySelector('#input');
const addTaskBtn = document.querySelector('#addTaskBtn');
const tasks = document.querySelector('.tasks ul');

function addTask() {

    let task = document.createElement('li');

    task.innerHTML = `<div class="innerText">${input.value}</div>
            <span class="doneBtn">P</span>
            <span class="deleteBtn">O</span>`
    tasks.appendChild(task);

    input.value = '';
}

addTaskBtn.addEventListener('click', addTask);

// input.addEventListener('keypress' , addTask);
// * perform the same function under enter keypress






// # crossing performed tasks

let doneBtn = document.getElementsByClassName('doneBtn');

for (let n = 0; n < doneBtn.length; n++){
   
    doneBtn[n].addEventListener('click', function(e) {
        let target = e.target;

        let text = target.previousElementSibling;
        text.style.textDecoration = 'line-through';
    });
}
// * give attribute to uncross the task






// # deleting the task
const deleteBtn = document.querySelectorAll('.deleteBtn');
