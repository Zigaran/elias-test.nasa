export interface ThemeColors {
  readonly screenBg: string;
  readonly primary: string;
}

export interface TextMetrics {
  readonly size: number;
  readonly bold?: boolean;
  readonly color: string;
  readonly uppercase?: boolean;
  readonly letterSpacing?: number;
  readonly font: string;
}

export interface TextStyles {
  readonly Body: TextMetrics;
}

export interface Theme {
  readonly name: string;
  readonly colors: ThemeColors;
  readonly text: TextStyles;
}
