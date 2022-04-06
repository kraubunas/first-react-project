import React from 'react';
import theme from '../../theme/theme';

const divStyle: React.CSSProperties = {
  width: theme.containerWidth,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  background: theme.sectionBackgroundColor,
  color: theme.sectionTextColor,
};

const imgStyle: React.CSSProperties = {
  width: '250px',
  height: '250px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '3px 3px 0 0',
};

const cardStyle: React.CSSProperties = {
  background: 'white',
  borderRadius: '3px',
};

const MainSection: React.FC = () => (
  <div style={divStyle}>
    <div style={cardStyle}>
      <img style={imgStyle} src="../assets/arch1.jpg" alt="arch" />
      <p>txt</p>
    </div>
    <div style={cardStyle}>
      <img style={imgStyle} src="../assets/arch1.jpg" alt="arch" />
      <p>txt</p>
    </div>
    <div style={cardStyle}>
      <img style={imgStyle} src="../assets/arch1.jpg" alt="arch" />
      <p>txt</p>
    </div>
    <div style={cardStyle}>
      <img style={imgStyle} src="../assets/arch2.jpg" alt="arch" />
      <p>txt</p>
    </div>
    <div style={cardStyle}>
      <img style={imgStyle} src="../assets/arch2.jpg" alt="arch" />
      <p>txt</p>
    </div>
    <div style={cardStyle}>
      <img style={imgStyle} src="../assets/arch2.jpg" alt="arch" />
      <p>txt</p>
    </div>
  </div>
);

export default MainSection;
