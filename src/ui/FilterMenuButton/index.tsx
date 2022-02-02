import React, { useContext } from 'react';

import { ModalStore } from '../../stores';

import { Container, WalleImg } from './styled';

import walle from '../../images/walle.png';

interface FilterMenuButtonProps {
  onClick: () => void;
}

const FilterMenuButton = (props: FilterMenuButtonProps): JSX.Element => {
  const modalStore = useContext(ModalStore);

  const { onClick } = props;

  return (
    <Container pressable={!modalStore.isModalOpen} onClick={onClick}>
      <WalleImg src={walle} alt="walle" />
    </Container>
  );
};

export default FilterMenuButton;
