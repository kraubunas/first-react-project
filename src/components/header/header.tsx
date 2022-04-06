import React from 'react';
import HeaderContainer from '../header-container';
import HeaderImage from './header-image/header-image';
import HeaderItem from './header-item/header-item';

const Header: React.FC = () => (
  <HeaderContainer>
    <HeaderItem />
    <HeaderImage />
  </HeaderContainer>
);

export default Header;
