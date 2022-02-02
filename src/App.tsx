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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route element={<WelcomePage />} path="/" />
            <Route element={<SearcherPage />} path="/searcher" />
            <Route element={<div>404 Not found</div>} path="*" />
          </Routes>
        </BrowserRouter>
      </ModalContextProvider>
    </DataProvider>
  );
};

export default App;
