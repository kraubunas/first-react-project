import React from 'react';

const style: React.CSSProperties = {
  width: '150px',
  height: '200px',
  position: 'absolute',
  top: 50,
  left: '44.5%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  gap: '10px',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  height: 40,
  border: 'none',
  color: 'white',
  borderRadius: '2px',
  backgroundColor: 'skyblue',
};

const HeaderItem: React.FC = () => (
  <div style={style}>
    <h1>Title</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, porro!</p>
    <button style={buttonStyle} type="button">Button</button>
  </div>
);

export default HeaderItem;
