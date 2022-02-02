import React, { useContext, useMemo, useRef } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import { DATE_TYPES } from '../../constants';
import { useOnClickOutside } from '../../hooks';
import { ModalStore, DataStore } from '../../stores';
import Button from '../CustomButton';
import Space from '../Space';
import Theme from '../Theme';
import CustomInput from '../CustomInput';

import { Container, GridLayout, Modal, TitleText } from './styled';

const FilterModal = () => {
  const modalStore = useContext(ModalStore);
  const dataStore = useContext(DataStore);

  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, modalStore.closeModal);

  const onSearchClick = () => {
    if (!dataStore.wrongDate && dataStore.selectedDate) {
      dataStore.fetchPhotos();
    }
  };

  const Rovers = useMemo(() => {
    if (dataStore.rovers) {
      return dataStore.rovers.map((rov) => {
        const isActive = dataStore.selectedRover?.name === rov.name;

        return (
          <Button text={rov.name} isActive={isActive} onClick={() => dataStore.setSelectedRover(rov)} key={rov.id} />
        );
      });
    }

    return null;
  }, [dataStore.rovers, dataStore.selectedRover]);

  const Cameras = useMemo(() => {
    if (dataStore.selectedRover) {
      return dataStore.selectedRover?.cameras.map((cam) => {
        return (
          <Dropdown.Item onClick={() => dataStore.setSelectedCamera(cam.name)} key={cam.id}>
            {cam.name}
          </Dropdown.Item>
        );
      });
    }

    return null;
  }, [dataStore.selectedRover]);

  const Dates = useMemo(() => {
    return DATE_TYPES.map((date) => {
      const isActive = dataStore.selectedDateType?.name === date.name;

      return (
        <Button
          text={date.name}
          isActive={isActive}
          onClick={() => dataStore.setSelectedDateType(date)}
          key={date.id}
        />
      );
    });
  }, [dataStore.selectedDateType]);

  if (!modalStore.isModalOpen) {
    return null;
  }

  return (
    <Container>
      <Modal ref={modalRef}>
        <TitleText style={Theme.text.TitleText}>Choose a Rover</TitleText>
        <GridLayout>{Rovers}</GridLayout>
        <Space space={30} vertical />
        {dataStore.selectedRover ? (
          <>
            <TitleText style={Theme.text.TitleText}>Choose a Camera</TitleText>
            <DropdownButton
              style={{ minWidth: 200 }}
              variant="secondary"
              menuVariant="dark"
              title={dataStore.selectedCamera}
            >
              {Cameras}
            </DropdownButton>{' '}
          </>
        ) : null}
        <Space space={30} vertical />
        {dataStore.selectedCamera ? (
          <>
            <TitleText style={Theme.text.TitleText}>Choose a Date Type</TitleText>
            <GridLayout>{Dates}</GridLayout>
          </>
        ) : null}
        <Space space={30} vertical />
        {dataStore.selectedDateType ? (
          <>
            <TitleText style={Theme.text.TitleText}>Specify a Date</TitleText> <CustomInput />
            <Space space={30} vertical />
            <Button text="SEARCH" disabled={dataStore.wrongDate} onClick={onSearchClick} />
          </>
        ) : null}
      </Modal>
    </Container>
  );
};

export default FilterModal;
