function addTodo() {
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (text !== "") {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.classList.add("my-3");

    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("px-3");
    li.appendChild(span);

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.style.display = "none";
    li.appendChild(editInput);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Duzelt";
    editBtn.className = "btn btn-warning mx-3";
    editBtn.onclick = function () {
      toggleEditMode(li);
    };
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.className = "btn btn-danger";
    deleteBtn.onclick = function () {
      deleteTodoItem(li);
    };
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
  }
}

function toggleEditMode(todoItem) {
  const textSpan = todoItem.querySelector("span");
  const editInput = todoItem.querySelector("input[type='text']");

  if (editInput.style.display === "none") {
    editInput.value = textSpan.textContent;
    textSpan.style.display = "none";
    editInput.style.display = "inline-block";
  } else {
    textSpan.textContent = editInput.value;
    editInput.style.display = "none";
    textSpan.style.display = "inline-block";
  }
}

function deleteTodoItem(todoItem) {
  const list = document.getElementById("list");
  list.removeChild(todoItem);
}
