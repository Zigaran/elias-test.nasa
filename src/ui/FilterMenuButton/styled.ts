import styled from 'styled-components';
import Theme from '../Theme';

interface ContainerProps {
  readonly pressable: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: ${Theme.colors.transparentOrange};
  border-radius: 80px;
  bottom: 15px;
  ${({ pressable }): string => (pressable ? '' : 'pointer-events: none;')}
  box-shadow: 0px 0px 12px 3px ${Theme.colors.transparentOrange};
  display: flex;
  height: 80px;
  justify-content: center;
  position: fixed;
  z-index: 0;
  right: 15px;
  width: 80px;
  transition: all 300ms ease-out;
  &:hover {
    background-color: ${Theme.colors.marsOrange};
    box-shadow: 0px 0px 20px 10px ${Theme.colors.marsOrange};
    transition: all 300ms;
  }
`;

export const WalleImg = styled.img`
  cursor: pointer;
  height: 100%;
  transition: all 300ms;
  &:hover {
    transform: scale(1.1);
    transition: all 300ms;
  }
  &:active {
    transform: scale(1);
  }
`;
