import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import { AuthLayout } from './pages/Auth/AuthLayout';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import { Error } from './pages/Error/Error';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import RequireAuth from './pages/Auth/RequireAuth/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/trafalgar/" replace />,
  },
  {
    path: '/trafalgar/',
    element: (
      <RequireAuth>
        <Navbar />
      </RequireAuth>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/trafalgar/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <RequireAuth>
            <Login />
          </RequireAuth>
        ),
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
