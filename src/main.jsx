import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// import './assets/css/todolist.css';
import './global.css'
// import App from './App.jsx';
import Profile from './pages/Profile';
import TodoList from './pages/TodoList'
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '*',
    element: <h1>Page not found</h1>
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/todo-list',
    element: <TodoList />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
