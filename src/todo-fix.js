//Create QuerySelector to input the future text change and input //
window.addEventListener("load", () => {
  let form = document.querySelector("#new-task-form-fix");
  let input = document.querySelector("#new-task-input-fix");
  let list_el = document.querySelector("#tasks-fix");

  //When submitting new value in the form//
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let task = input.value;

    // Create new entered task inside our div content //
    let task_el = document.createElement("div");
    task_el.classList.add("task");

    let task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    let task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    let task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    //Enable edit of existing task//
    let task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit-fix");
    task_edit_el.innerHTML = "Edit";

    //Enable Deletion or existing task//
    let task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete-fix");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    //Changing input when editing and enable saving or deleting new input inside an existing line//

    task_edit_el.addEventListener("click", (event) => {
      if (task_edit_el.innerHTML.toLowerCase() == "edit") {
        task_edit_el.innerHTML = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerHTML = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", (event) => {
      list_el.removeChild(task_el);
    });
  });
});
