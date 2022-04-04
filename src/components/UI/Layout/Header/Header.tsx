import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import Container from '../../Container/Container';

const Header: FC = () => (
  <Container>
    <header className="Header">
      <Logo />
      <Navbar />
    </header>
  </Container>
);

export default Header;
