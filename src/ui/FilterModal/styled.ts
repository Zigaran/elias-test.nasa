import styled from 'styled-components';
import Theme from '../Theme';

export const Container = styled.div`
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: ${Theme.colors.transparent};
  z-index: 2;
`;

export const Modal = styled.div`
  box-shadow: 0px 0px 20px 10px ${Theme.colors.transparentPrimary};
  display: flex;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${Theme.colors.transparentPrimary};
  width: 480px;
  height: 550px;
`;

export const TitleText = styled.h1`
  cursor: default;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;
