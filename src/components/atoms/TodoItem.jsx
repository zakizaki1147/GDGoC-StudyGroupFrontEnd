import React, { useState } from "react";
import Button from "../Button";
import { FaCheck, FaPen, FaSave, FaTrash } from "react-icons/fa";

export default function TodoItem({ id, item, updateTodo, deleteTodo, toggleStatus }) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(item.deskripsi)

  const handleUpdate = () => {
    if (!text.trim()) {
      return
    }
    updateTodo(item.id, text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpdate()
    } else if (e.key === "Escape") {
      setText(item.deskripsi)
      setIsEditing(false)
    }
  }

  return (
    <li
      className="
      flex justify-between items-center 
      p-4 mb-3 
      bg-bgBody dark:bg-bgBodyDark 
      rounded-lg 
      border-l-4 border-accent 
      shadow-sm 
      animate-slideIn 
      transition-all duration-300 
      hover:translate-x-1
    "
    >
      {isEditing ?
        <span className="flex items-center gap-2 w-full max-w-100 h-full mr-2">
          <b>{id}</b>
          <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} autoFocus
            className="w-full px-3 h-full border border-borderColor dark:border-borderColorDark rounded-lg outline-none bg-transparent text-textPrimary dark:text-textPrimaryDark focus:bg-white dark:focus:bg-bgCardDark focus:border-accent transition-colors duration-200" />
        </span>
      :
        <span className="font-medium text-textPrimary dark:text-textPrimaryDark break-all pr-4">
          <b>{id}</b> {item.deskripsi}
        </span>
      }

      <div className="flex gap-2">
        {isEditing ? (
          <Button variant="success" onClick={handleUpdate}>
            <FaSave />
          </Button>
        )
        :
        (
          <Button variant="warning" onClick={() => {
            if (isEditing) {
              handleUpdate()
            } else {
              setIsEditing(true)
            }
          }}>
            <FaPen />
          </Button>
        )}
        <Button variant="danger" onClick={() => deleteTodo(item.id)}>
          <FaTrash />
        </Button>
        <Button variant="success" onClick={() => toggleStatus(item.id)}>
          <FaCheck />
        </Button>
      </div>
    </li>
  );
}
