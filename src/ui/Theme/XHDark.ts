import { Theme } from './interfaces';

export enum FontFamily {
  AvenirDemi = 'AvenirNextLTPro-Demi',
  AvenirRegular = 'AvenirNextLTPro-Regular',
  AvenirBold = 'AvenirNextLTPro-Bold',
}

const colors = {
  screenBg: '#13141C', // dark/black
  primary: '#ffffff', // white
};

const XHDark: Theme = {
  name: 'xhdark',
  colors,
  text: {
    Body: {
      font: FontFamily.AvenirDemi,
      color: colors.primary,
      size: 20,
    },
  },
};

export default XHDark;
