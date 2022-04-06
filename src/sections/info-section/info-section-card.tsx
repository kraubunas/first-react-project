import React from 'react';
import theme from '../../theme/theme';

const style: React.CSSProperties = {
  width: theme.containerWidth,
  color: theme.sectionTextColor,

};

const InfoSectionCard: React.FC = () => (
  <div style={style}>
    <h1>Portfolio</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, inventore.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, saepe repudiandae
      cupiditate,
      dolore voluptas magnam quod voluptatibus aperiam repellendus,
      doloribus quasi sunt nam ipsam ad vitae iure recusandae unde illo?
    </p>
  </div>
);

export default InfoSectionCard;
