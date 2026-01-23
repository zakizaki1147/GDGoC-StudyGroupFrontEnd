const body = document.body;
const switchBtn = document.getElementById("switch-mode");
const filterBtn = document.getElementById("switch-filter");
const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("add-btn")
const todoListContainer = document.getElementById("todo-list")
let isDescending = false

let todos = [
    // {id: 1, text: "Ayam"}
]

switchBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode")

    if (isDarkMode) {
        switchBtn.innerText = "☀️ Switch to Light Mode ☀️"
    } else {
        switchBtn.innerText = "🌙 Switch to Dark Mode 🌙"
    }
})

filterBtn.addEventListener("click", () => {
    isDescending = !isDescending

    sortById()
    renderTodoList()

    if (isDescending) {
        filterBtn.innerText = "Sort by Ascending"
    } else {
        filterBtn.innerText = "Sort by Descending"
    }
})

function renderTodoList() {
    todoListContainer.innerHTML = ""

    if (todos.length === 0) {
        const li = document.createElement("li")
        const span = document.createElement("span")
        span.textContent = "Tidak ada data."
        li.appendChild(span)

        li.classList.add("no-task")

        todoListContainer.append(li)
        return;
    }

    const todoElement = todos.map((item, index) => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        const delay = index * 0.1
        const deleteBtn = document.createElement("button")

        span.textContent = item.text

        li.style.animationDelay = `${delay}s`

        deleteBtn.textContent = "X"
        deleteBtn.classList.add("btn-delete")

        deleteBtn.addEventListener("click", () => {
            deleteTodo(item.id)
        })

        if (item.isNew) {
            li.classList.add("slide-in")
            item.isNew = false
        }

        li.appendChild(span)
        li.appendChild(deleteBtn)

        return li
    })

    todoListContainer.append(...todoElement)
}

renderTodoList()

addBtn.addEventListener("click", () => {
    const newText = todoInput.value;

    if (newText === "") {
        alert("Masukkan kegiatan!")
        return;
    }

    const newData = {
        id: Date.now(),
        text: newText,
        isNew: true
    }

    todos.push(newData)

    todoInput.value = ""

    renderTodoList()
})

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id)
    renderTodoList()
}

function sortById() {
    todos.sort((first, latest) => {
        return isDescending ? latest.id - first.id : first.id - latest.id
    })
}