import React from 'react';
import avatar from '../../../assets/images/profile.webp';
import Button from '../../../components/Button';
import { Link } from 'react-router';

const ProfileCard = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="bg-white p-8 w-104 rounded-3xl flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <img src={avatar} alt="Avatar" className="w-20 rounded-full" />
        <div>
          <h2 className="text-lg font-bold tracking-wider">Gunawan Zaki</h2>
          <p className="text-sm font-medium tracking-wide">Frontend Developer</p>
        </div>
      </div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores facilis perspiciatis porro? Consequatur ad recusandae hic deleniti blanditiis quaerat obcaecati.
      </p>
      <div className='flex justify-between'>
        <Button 
          type='button' 
          variant='secondary' 
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            localStorage.setItem('isDarkMode', !isDarkMode)
          }}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
        <Link to='/todo-list'>
          <Button type='button' variant='primary'>
            Go to To-do List
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
