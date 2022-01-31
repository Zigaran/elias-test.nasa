import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { WelcomePage, SearcherPage } from './components';
import GlobalStyles from './styles';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<WelcomePage />} path="/" />
          <Route element={<SearcherPage />} path="/searcher" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
