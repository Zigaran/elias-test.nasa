import styled from 'styled-components';
import Theme from '../Theme';

interface ContainerProps {
  readonly isActive?: boolean;
  readonly disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: ${({ disabled }): string => (disabled ? 'default' : 'pointer')};
  padding: 0 5px;
  background-color: ${({ isActive }): string => (isActive ? Theme.colors.transparentPrimary : Theme.colors.primary)};
  ${({ isActive }): string => (isActive ? `box-shadow: 0px 0px 10px 6px ${Theme.colors.marsOrange};` : '')}
  ${({ disabled }): string => (disabled ? `opacity: 0.5;` : '')}
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: ${Theme.colors.primary};
  transition: all 100ms;
  ${({ disabled }): string =>
    disabled
      ? ''
      : `&:active {
    transform: scale(0.95);
    transition: all 100ms;
  }`}
`;

export const Text = styled.h1`
  margin: 0;
`;
