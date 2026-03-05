/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import Button from "../../../components/Button";
import NoItem from "../../../components/atoms/NoItem";
import TodoItem from "../../../components/atoms/TodoItem";
import axios from "axios";
import { useLoading } from "../../../context/LoadingContext";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

const TodoList = ({ inputRef }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const { setIsLoading } = useLoading()

  // const [list, setList] = useState(() => {
  //   const saved = localStorage.getItem("todos");
  //   return saved ? JSON.parse(saved) : [];
  // });


  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${API_URL}?_limit=10`)
        const formattedData = response.data.map((item) =>({
          id: item.id,
          deskripsi: item.title,
          completed: item.completed
        }))

        setList(formattedData)
        console.log(response)
      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTodos()
  }, [])

  const addTodoHandler = async () => {
    setIsLoading(true)
    if (!todo.trim()) return;

    try {
      const response = await axios.post(API_URL, {
        title: todo,
        completed: false,
        userId: 1
      })

      const newTodo = {
        id: Date.now(),
        deskripsi: response.data.title,
        completed: false
      }

      setList((prev) => [...prev, newTodo])
      setTodo("")
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
    // const data = {
    //   id: list.length === 0 ? 1 : list.at(-1).id + 1,
    //   deskripsi: todo,
    // };

    // const updatedList = [...list, data];
    // setList(updatedList);
    // localStorage.setItem("todos", JSON.stringify(updatedList));
    // setTodo("");
  };

  const updateTodo = async (id, newText) => {
    setIsLoading(true)
    try {
      await axios.patch(`${API_URL}/${id}`, {
        deskripsi: newText
      })

      setList((prev) => prev.map((item) => item.id === id ? {...item, deskripsi: newText} : item))
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteTodo = async (id) => {
    setIsLoading(true)
    try {
      await axios.delete(`${API_URL}/${id}`)
      setList((prev) => prev.filter((item) => item.id !== id))
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
    // const filterTodo = list.filter((item) => item.id !== id);
    // setList(filterTodo);
    // localStorage.setItem("todos", JSON.stringify(filterTodo));
  };

  const toggleStatus = async (id, currentStatus) => {
    setIsLoading(true)
    try {
      const response = await axios.patch(`${API_URL}/${id}`, {
        completed: !currentStatus
      })
      setList((prev) => prev.map((item) => item.id === id ? {...item, completed: response.data.completed} : item))
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const sortedTodo = useMemo(() => {
    return [...list].sort((a, b) => {
      if (isAscending) return a.id - b.id;
      return b.id - a.id;
    });
  }, [list, isAscending]);

  return (
    <div className="border border-borderColor dark:border-borderColorDark md:h-85 w-full bg-bgCard dark:bg-bgCardDark p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors duration-300 flex flex-col">
      <h3 className="font-bold text-xl mb-4 text-textPrimary dark:text-textPrimaryDark">
        <span className="w-2 h-6 bg-accent rounded-full inline-block align-middle mr-1"></span>
        My Tasks
      </h3>

      <div className="flex gap-2 mb-4 w-full shrink-0">
        <input
          ref={inputRef}
          type="text"
          value={todo}
          placeholder="Tulis tugas baru..."
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodoHandler()}
          className="flex-1 p-3 border border-borderColor dark:border-borderColorDark rounded-lg outline-none bg-transparent text-textPrimary dark:text-textPrimaryDark placeholder-textSecondary dark:placeholder-textSecondaryDark focus:border-accent transition-colors duration-200"
        />

        <div className="flex gap-2">
          <Button
            variant="warning"
            onClick={() => setIsAscending(!isAscending)}
            className="flex-1 sm:flex-none justify-center"
          >
            {isAscending ? "Oldest" : "Newest"}
          </Button>

          <Button
            variant="primary"
            onClick={addTodoHandler}
            className="flex-1 sm:flex-none justify-center"
          >
            Add
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {list.length === 0 ? (
          <NoItem />
        ) : (
          <ul className="flex flex-col gap-3 overflow-y-auto pr-2 h-50 md:h-full [scrollbar-width:thin] [scrollbar-color:var(--color-textSecondary)_transparent]">
            {sortedTodo.map((item, index) => (
              <TodoItem
                key={item.id}
                id={index + 1}
                item={item}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                toggleStatus={toggleStatus}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
