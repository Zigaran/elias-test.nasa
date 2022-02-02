export interface ThemeColors {
  readonly screenBg: string;
  readonly primary: string;
  readonly marsOrange: string;
  readonly transparentOrange: string;
  readonly slightlyOrange: string;
  readonly transparent: string;
  readonly transparentPrimary: string;
  readonly transparentDark: string;
  readonly red: string;
}

export interface TextMetrics {
  readonly fontSize: number;
  readonly bold?: boolean;
  readonly color: string;
  readonly uppercase?: boolean;
  readonly letterSpacing?: number;
  readonly fontFamily: string;
}

export interface TextStyles {
  readonly TitleText: TextMetrics;
  readonly ButtonText: TextMetrics;
  readonly NotFoundMessage: TextMetrics;
  readonly WelcomeText: TextMetrics;
}

export interface Theme {
  readonly name: string;
  readonly colors: ThemeColors;
  readonly text: TextStyles;
}
