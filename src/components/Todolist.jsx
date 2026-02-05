import React, { useState, useMemo } from 'react';
import '../assets/css/todolist.css';
import Button from './Button';
import { FaCheck, FaTrash } from "react-icons/fa";
import NoItem from './atoms/NoItem';

const TodoList = ({ inputRef }) => {
  const [todo, setTodo] = useState('');
  const [isAscending, setIsAscending] = useState(false)

  const [list, setList] = useState([
    {
      id: 0,
      deskripsi: 'Belajar ReactJs',
      completed: false
    },
  ]);

  const addTodoHandler = () => {
    const data = {
      id: list.length === 0 ? 1 : list.at(-1).id + 1,
      deskripsi: todo,
      completed: false
    };

    setList([...list, data]);

    setTodo('');
  };

  const deleteTodo = (id) => {
    const filterTodo = list.filter((item) => item.id !== id)

    setList(filterTodo)
  }

  const sortedTodo = useMemo(() => {
    return [...list].sort((a, b) => {
      if (isAscending) return b.id - a.id
      return a.id - b.id
    })
  }, [list, isAscending])

  const toggleCompleteTodo = (id) => {
    const updatedTodo = list.map((item) => item.id === id ? { ...item, completed: !item.completed} : item)
    setList(updatedTodo)
  }

  const completedTodo = useMemo(() => {
    return list.filter((item) => item.completed).length
  }, [list])

  return (
    <div className="card todo-section">
      <div className='todo-header'>
        <h3>My Tasks</h3>
        <h4 className='todo-status'>Completed To-do List: {completedTodo} / {list.length}</h4>
      </div>

      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Tulis tugas baru..."
          onInput={(e) => setTodo(e.target.value)}
        />
        <Button type='button' variant='primary' onClick={() => addTodoHandler()}>
          Add
        </Button>
        <Button type='button' variant='warning' onClick={() => setIsAscending(!isAscending)}>
          Filter
        </Button>
      </div>
      {list.length === 0 ? <NoItem /> : (
        <ul id="todo-list" className="todo-list">
          {sortedTodo.map((element) => {
            return (
              <li key={element.id} className={element.completed ? "done" : ""}>
                <span className={element.completed ? "text-done" : ""}>
                  <b>{element.id + 1}</b> {element.deskripsi}
                </span>
                <div className='btn-wrapper'>
                  <Button variant='success' onClick={() => toggleCompleteTodo(element.id)}>
                    <FaCheck />
                  </Button>
                  <Button variant='danger' onClick={() => deleteTodo(element.id)}>
                    <FaTrash />
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
