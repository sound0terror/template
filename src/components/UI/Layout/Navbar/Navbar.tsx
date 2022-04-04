import React, { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import './Navbar.scss';

const Navbar: FC = () => (
  <nav className="Navbar">
    <NavLink to="/home" value="home" classes="Header-NavLink" />
    <NavLink to="/countries" value="countries" classes="Header-NavLink" />
  </nav>
);

export default Navbar;
