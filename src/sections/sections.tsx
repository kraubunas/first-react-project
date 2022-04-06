import React from 'react';
import SectionsContainer from './sections-container';
import InfoSectionCard from './info-section/info-section-card';
import MainSection from './main-section/main-section';

const Sections: React.FC = () => (
  <SectionsContainer>
    <InfoSectionCard />
    <MainSection />
  </SectionsContainer>

);

export default Sections;
