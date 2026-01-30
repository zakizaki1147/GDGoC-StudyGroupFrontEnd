import React from 'react'
import '../assets/css/profiletodo.css'
import avatar from '../assets/images/profile.webp'

const ProfileCard = ({ isDarkMode, toggleDarkMode }) => {

  return (
    <>
      <div className="card profile-section">
        <div className="profile-header">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div>
            <h2 id="name-display">Gunawan Zaki</h2>
            <p className="role">Frontend Developer</p>
          </div>
        </div>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
          facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
          blanditiis quaerat obcaecati.
        </p>

        <button className="btn btn-secondary" onClick={toggleDarkMode}>
          {isDarkMode ? "☀️ Switch to Light Mode ☀️" : "🌙 Switch to Dark Mode 🌙"}
        </button>
      </div>
    </>
  )
}

export default ProfileCard
