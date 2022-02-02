import { createGlobalStyle } from 'styled-components';

import AvenirNextLTProBold from './fonts/AvenirNextLTPro-Bold.ttf';
import AvenirNextLTProDemi from './fonts/AvenirNextLTPro-Demi.ttf';
import AvenirNextLTProRegular from './fonts/AvenirNextLTPro-Regular.ttf';
import { Theme } from '../ui';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;
    overflow: auto;
    background-color: ${Theme.colors.screenBg};
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Regular';
    src: url(${AvenirNextLTProRegular}) format('truetype');
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Demi';
    src: url(${AvenirNextLTProDemi}) format('truetype');
  }

  @font-face {
    font-family: 'AvenirNextLTPro-Bold';
    src: url(${AvenirNextLTProBold}) format('truetype');
  }
`;

export default GlobalStyles;
