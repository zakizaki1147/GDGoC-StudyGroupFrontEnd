import React, { useState, useMemo, useEffect } from 'react';
import '../../../assets/css/todolist.css';
import Button from '../../../components/Button';
import { FaCheck, FaTrash } from "react-icons/fa";
import NoItem from '../../../components/atoms/NoItem';
import { Link } from 'react-router';

const TodoList = ({ inputRef }) => {
  const [todo, setTodo] = useState('');
  const [isAscending, setIsAscending] = useState(false)

  const [list, setList] = useState(() => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
  }, [list])

  const addTodoHandler = () => {
    if (todo.trim() === '') {
      alert('Mohon isi kolom to-do!')
      return
    }

    const data = {
      id: list.length === 0 ? 1 : list.at(-1).id + 1,
      deskripsi: todo,
      completed: false
    };

    setList([...list, data])
    setTodo('')
  };

  const deleteTodo = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const sortedTodo = useMemo(() => {
    return [...list].sort((a, b) => {
      if (isAscending) return b.id - a.id
      return a.id - b.id
    })
  }, [list, isAscending])

  const toggleCompleteTodo = (id) => {
    setList(
      list.map((item) => 
        item.id === id ? { ...item, completed: !item.completed} : item
      )
    )
  }

  const completedTodo = useMemo(() => {
    return list.filter((item) => item.completed).length
  }, [list])

  return (
    <div className="bg-white p-8 w-104 rounded-3xl flex flex-col gap-4">
      <Link to='/profile' className='w-fit'>
        <Button type='button' variant='primary'>
          Back to Profile
        </Button>
      </Link>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-bold tracking-wider'>My Tasks</h3>
        <h4 className='text-sm font-medium'>Completed To-do List: {completedTodo} / {list.length}</h4>
      </div>

      <div className="flex justify-between">
        <input
          ref={inputRef}
          type="text"
          placeholder="Tulis tugas baru..."
          onInput={(e) => setTodo(e.target.value)}
          className='w-52 rounded-md px-2 outline-0 ring ring-gray-400 focus:ring-2 focus:ring-blue-500'
        />
        <div className='flex gap-1'>
          <Button type='button' variant='primary' onClick={() => addTodoHandler()}>
            Add
          </Button>
          <Button type='button' variant='warning' onClick={() => setIsAscending(!isAscending)}>
            Filter
          </Button>
        </div>
      </div>
      {list.length === 0 ? <NoItem /> : (
        <ul className="flex flex-col gap-2">
          {sortedTodo.map((element, index) => {
            return (
              <li key={element.id} className={`p-3 flex justify-between items-center bg-blue-100 rounded-md border-l-4 border-blue-500 transition-colors duration-300 ${element.completed ? "bg-green-100 border-green-500" : ""}`}>
                <span className={element.completed ? "text-green-500" : ""}>
                  <b>{isAscending ? sortedTodo.length - index : index + 1}</b> {element.deskripsi}
                </span>
                <div className='flex gap-1'>
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
