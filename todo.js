
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
    // to prevent the default behavior of the browser
    e.preventDefault();
    // console.log(input.value);
    //todo get the input value
    let task = input.value

    //todo if no task entered send a response
    if (task === "") {
        alert("Please enter a task")
        return;
    }

    //todo create a span for the task and insert it into the li

    const span = document.createElement("span");
    span.textContent = task;
    span.classList.add("text-white", "font-semibold");


    // todo create an li and insert the task into it
    const li = document.createElement("li");
    li.classList.add("bg-blue-400", "p-4", "rounded", "py-2", "mt-2", "flex", "justify-between", "items-center");
    li.appendChild(span);


    //todo insert the li into the ul
    ul.appendChild(li);


    // todo clear the input field
    input.value = "";

    // todo create a delete button

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("bg-red-500", "text-white", "px-2", "py-1", "rounded", "ml-4", "hover:bg-red-600", "transition-colors", "duration-300", "cursor-pointer");


    //  todo insert it into the li
    li.appendChild(deleteButton);


    // todo deleteButtonm functionality
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    // todo edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("bg-green-500", "text-white", "px-2", "py-1", "rounded", "ml-4", "hover:bg-green-600", "transition-colors", "duration-300", "cursor-pointer");



    // todo insert it into the li
    li.appendChild(editButton);


    // todo edit button functionality
    editButton.addEventListener("click", () => {
        //todo get the edited task from the user
        const newTask = prompt("Edit  task",);
        if (newTask !== null) {
            span.textContent = newTask;
        }

    });

    // create div
    const div = document.createElement("div");
    div.classList.add("flex", "gap-2"); 
    li.appendChild(div);

    // move buttons to div
    div.appendChild(editButton);
    div.appendChild(deleteButton);

});