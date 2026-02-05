import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/todolist';

const ProfileTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [isDarkMode])

  return (
    <section className="app-container">
      <ProfileCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <TodoList inputRef={inputRef} />
    </section>
  );
};

export default ProfileTodo;
