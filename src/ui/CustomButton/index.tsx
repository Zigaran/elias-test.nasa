import React from 'react';

import Theme from '../Theme';

import { Container, Text } from './styled';

interface CustomButtonProps {
  text?: string;
  isActive?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { disabled, text, isActive, onClick } = props;

  return (
    <Container disabled={disabled} onClick={onClick} isActive={isActive}>
      <Text style={Theme.text.ButtonText}>{text}</Text>
    </Container>
  );
};

export default CustomButton;
