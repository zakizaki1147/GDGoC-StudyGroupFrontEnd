import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// import App from './App.jsx';
import ProfileTodo from './pages/ProfileTodo';
import './global.css';
import {createBrowserRouter, RouterProvider} from 'react-router';
import { LoadingProvider } from './context/LoadingContext';

const router = createBrowserRouter([
  {
    path: '*',
    element: <h1>Page not found</h1>,
  },
  {
    path: '/profile-todo',
    element: <ProfileTodo />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </StrictMode>,
);
