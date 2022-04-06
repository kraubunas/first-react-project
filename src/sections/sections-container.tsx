import React from 'react';
import theme from '../theme/theme';

const style: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  paddingTop: 20,
  paddingBottom: 40,
  background: theme.sectionBackgroundColor,
};

const SectionsContainer: React.FC = ({ children }) => (
  <div style={style}>{children}</div>
);

export default SectionsContainer;
