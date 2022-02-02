import React from 'react';
import { Link } from 'react-router-dom';

import { Theme, CustomButton } from '../../ui';

import { Container, TextMessage } from './styled';

const WelcomePage = () => {
  return (
    <Container>
      <TextMessage style={Theme.text.WelcomeText}>Elias Zigaran - Challenge NASA API</TextMessage>
      <Link to="/searcher">
        <CustomButton text="Go to SearchPage" onClick={() => {}} />
      </Link>
    </Container>
  );
};

export default WelcomePage;
