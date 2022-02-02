/* eslint-disable no-extra-boolean-cast */
import React, { useContext, useEffect, useMemo } from 'react';
import Pagination from '@mui/material/Pagination';

import { FilterMenuButton, FlexBox, FlexAlignment, FlexDirection, Gallery, Theme } from '../../ui';
import { ModalStore, DataStore } from '../../stores';

import { PaginatorContainer, Container, TextMessage } from './styled';

const SearcherPage = (): JSX.Element => {
  const modalStore = useContext(ModalStore);
  const dataStore = useContext(DataStore);

  useEffect(() => {
    dataStore.fetchRovers();
  }, []);

  const notFoundMessage = useMemo(() => {
    if (Boolean(!dataStore.roverPhotos?.length && dataStore.selectedRover)) {
      return (
        <TextMessage style={Theme.text.NotFoundMessage}>
          We have not been able to find anything with this filter configuration, sorry
        </TextMessage>
      );
    }

    return null;
  }, [dataStore.roverPhotos, dataStore.selectedRover]);

  return (
    <Container>
      <FlexBox
        flexDirection={FlexDirection.Row}
        alignItems={FlexAlignment.Center}
        justifyContent={FlexAlignment.Center}
      >
        {notFoundMessage}
        {Boolean(dataStore.roverPhotos?.length) && <Gallery />}
        <PaginatorContainer>
          <Pagination
            onChange={(_, page) => {
              dataStore.setCurrentPage(page);
            }}
            page={dataStore.currentPage}
            variant="outlined"
            color="primary"
            count={dataStore.totalPages}
          />
        </PaginatorContainer>
        <FilterMenuButton onClick={modalStore.openModal} />
      </FlexBox>
    </Container>
  );
};

export default SearcherPage;
