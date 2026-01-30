import React, { useEffect, useState } from 'react'
import './assets/css/profiletodo.css'
import ProfileCard from './components/ProfileCard'
import TodoList from './components/TodoList'

const ProfileTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  return (
    <>
      <section className="app-container">
        <ProfileCard
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <TodoList />
      </section>
    </>
  )
}

export default ProfileTodo
