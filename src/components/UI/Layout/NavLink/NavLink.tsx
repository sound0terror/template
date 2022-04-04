import React, { FC } from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import './NavLink.scss';

interface NavLinkProps {
  value: string
  to: string
  classes?: string
}

const NavLink: FC<NavLinkProps> = ({ value, to, classes }) => (
  <BaseNavLink
    to={to}
    className={({ isActive }) => (
      isActive ? `NavLink-Active NavLink ${classes}` : `NavLink ${classes}`
    )}
  >
    {value}
  </BaseNavLink>
);

NavLink.defaultProps = {
  classes: '',
};

export default NavLink;
