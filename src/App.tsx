import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FilterModal } from './ui';
import { DataProvider, ModalContextProvider } from './stores';
import { WelcomePage, SearcherPage } from './components';
import GlobalStyles from './styles';

const App = (): JSX.Element => {
  return (
    <DataProvider>
      <ModalContextProvider>
        <GlobalStyles />
        <FilterModal />
        <BrowserRouter>
          <Routes>
            <Route element={<WelcomePage />} path="/" />
            <Route element={<SearcherPage />} path="/searcher" />
          </Routes>
        </BrowserRouter>
      </ModalContextProvider>
    </DataProvider>
  );
};

export default App;
