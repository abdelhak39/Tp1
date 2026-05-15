let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let taskText = input.value;

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Accomplie";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = "";
});