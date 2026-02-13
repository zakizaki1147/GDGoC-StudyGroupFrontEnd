import React, { useState, useEffect } from 'react';
import ProfileCard from './partials/ProfileCard';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const mode = JSON.parse(localStorage.getItem('isDarkMode'))

  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [mode])

  return (
    <section>
      <ProfileCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </section>
  );
};

export default Profile;
