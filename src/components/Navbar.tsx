import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/trafalgar/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trafalgar/auth/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/trafalgar/auth/register">Register</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
