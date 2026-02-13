import React, { useRef, useEffect } from 'react'
import TodoListCard from '../TodoList/partials/TodoListCard';

const index = () => {
  const inputRef = useRef(null)
  
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <section>
      <TodoListCard inputRef={inputRef} />
    </section>
  )
}

export default index
