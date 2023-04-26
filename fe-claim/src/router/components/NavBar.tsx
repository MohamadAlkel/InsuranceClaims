import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarWrapper } from './NavBar.style';

const NavBar: FC = (): ReactElement<void> => {
  return (
    <NavBarWrapper>
      <ul>
        <li>
          <NavLink to="/">Claim</NavLink>
        </li>
        <li>
          <NavLink to="/submit-claim">Submit Claim</NavLink>
        </li>
      </ul>
    </NavBarWrapper>
  );
};

export default NavBar;
