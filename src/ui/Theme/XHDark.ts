import { Theme } from './interfaces';

export enum FontFamily {
  AvenirDemi = 'AvenirNextLTPro-Demi',
  AvenirRegular = 'AvenirNextLTPro-Regular',
  AvenirBold = 'AvenirNextLTPro-Bold',
}

const colors = {
  screenBg: '#222222', // dark/black
  primary: '#ffffff', // white
  marsOrange: 'rgba(189, 88, 0, 0.3)',
  transparentOrange: 'rgba(189, 88, 0, 0.2)',
  slightlyOrange: 'rgba(189, 88, 0, 0.5)',
  red: 'red',
  transparent: 'rgba(0, 0, 0, 0.4)',
  transparentPrimary: 'rgba(255, 255, 255, 0.7)',
  transparentDark: 'rgba(0, 0, 0, 0.65)',
};

const XHDark: Theme = {
  name: 'xhdark',
  colors,
  text: {
    TitleText: {
      fontFamily: FontFamily.AvenirRegular,
      color: colors.screenBg,
      fontSize: 21,
    },
    ButtonText: {
      fontFamily: FontFamily.AvenirDemi,
      color: colors.transparentDark,
      fontSize: 12,
    },
    NotFoundMessage: {
      fontFamily: FontFamily.AvenirBold,
      color: colors.red,
      fontSize: 30,
    },
    WelcomeText: {
      fontFamily: FontFamily.AvenirDemi,
      color: colors.transparentPrimary,
      fontSize: 20,
    },
  },
};

export default XHDark;
