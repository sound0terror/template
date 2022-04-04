import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/Logo.svg';
import './Logo.scss';

const Logo: React.FC = () => (
  <Link className="Logo" to="/">
    <img className="Logo-Image" src={logo} alt="logo" />
  </Link>
);

export default Logo;
