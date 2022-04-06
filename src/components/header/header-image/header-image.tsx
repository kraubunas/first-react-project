import React from 'react';

const style: React.CSSProperties = {
  width: '100%',
  height: '300px',
  backgroundImage: 'url(assets/header.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Header: React.FC = () => (
  <header style={style} />
);

export default Header;
