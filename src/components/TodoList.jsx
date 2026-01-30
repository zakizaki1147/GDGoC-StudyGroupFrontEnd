import React, { useState } from 'react'
import '../assets/css/profiletodo.css'

const TodoList = () => {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const [isDescending, setIsDescending] = useState(false)

  const addTodoHandler = () => {
    if (todo.trim() === "") {
      alert("Masukkan kegiatan!")
      return
    }

    const data = {
      id: Date.now(),
      deskripsi: todo
    }

    // list.push(data)

    setList(list => [...list, data])

    setTodo("")
  }

  const deleteTodoHandler = (id) => {
    setList(list => list.filter(element => element.id !== id))
  }

  const sortTodoHandler = () => {
    setIsDescending(list => !list)

    setList(list =>
      [...list].sort((first, latest) =>
        isDescending ? first.id - latest.id : latest.id - first.id
      )
    )
  }

  return (
    <>
      <div className="card todo-section">
        <h3>My Tasks</h3>

        <div className="input-group">
          <input
            type="text"
            placeholder="Tulis tugas baru..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTodoHandler}>Add</button>
        </div>
        <button className="btn btn-secondary" onClick={sortTodoHandler}>
          {isDescending ? "Sort by Ascending" : "Sort by Descending"}
        </button>

        <ul id="todo-list" className="todo-list">
          {list.length === 0 && (
            <li className='no-task'>
              <span>Tidak ada data.</span>
            </li>
          )}
          {list.map((element, index) => {
            return (
              <li key={element.id}>
                <span><b>{index + 1}</b> {element.deskripsi}</span>
                <button className='btn btn-delete' onClick={() => deleteTodoHandler(element.id)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
