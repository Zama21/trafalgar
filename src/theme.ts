interface Colors {
  Primary90: string;
  Primary60: string;
  Primary30: string;
  White: string;
  Error: string;
  Warning: string;
  Success: string;
  Overlay: string;
  coolGray10: string;
  coolGray20: string;
  coolGray30: string;
  coolGray40: string;
  coolGray50: string;
  coolGray60: string;
  coolGray70: string;
  coolGray80: string;
  coolGray90: string;
  coolGray100: string;
}

interface TypographyStyle {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

interface Typography {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  h4: TypographyStyle;
  h5: TypographyStyle;
  h6: TypographyStyle;
  subtitleM: TypographyStyle;
  subtitleS: TypographyStyle;
  bodyL: TypographyStyle;
  bodyM: TypographyStyle;
  bodyS: TypographyStyle;
  bodyXS: TypographyStyle;
  bodyXXS: TypographyStyle;
  caption: TypographyStyle;
  buttonL: TypographyStyle;
  buttonM: TypographyStyle;
  buttonS: TypographyStyle;
  menuTabs: TypographyStyle;
}

interface Fonts {
  primary: string;
}

export interface Theme {
  colors: Colors;
  spacing: (multiplier: number) => string;
  typography: Typography;
  fonts: Fonts;
}

export const theme: Theme = {
  colors: {
    Primary90: '#003D87',
    Primary60: '#0F62FE',
    Primary30: '#A6C8FF',
    White: '#ffffff',
    Error: '#DA1E28',
    Warning: '#F1C21B',
    Success: '#25A249',
    Overlay: '#12161980',
    coolGray10: '#f2f4f8',
    coolGray20: '#dde1e6',
    coolGray30: '#c1c7cd',
    coolGray40: '#a2a9b0',
    coolGray50: '#878d96',
    coolGray60: '#697077',
    coolGray70: '#4d5358',
    coolGray80: '#343a3f',
    coolGray90: '#21272a',
    coolGray100: '#121619',
  },
  spacing: (multiplier: number) => `${multiplier * 8}px`,
  typography: {
    h1: { fontWeight: 700, fontSize: '54px', lineHeight: '110%', letterSpacing: '0px' },
    h2: { fontWeight: 700, fontSize: '42px', lineHeight: '110%', letterSpacing: '0px' },
    h3: { fontWeight: 700, fontSize: '32px', lineHeight: '110%', letterSpacing: '0px' },
    h4: { fontWeight: 700, fontSize: '24px', lineHeight: '110%', letterSpacing: '0px' },
    h5: { fontWeight: 700, fontSize: '20px', lineHeight: '110%', letterSpacing: '0px' },
    h6: { fontWeight: 700, fontSize: '18px', lineHeight: '110%', letterSpacing: '0px' },
    subtitleM: { fontWeight: 500, fontSize: '16px', lineHeight: '110%', letterSpacing: '0px' },
    subtitleS: { fontWeight: 500, fontSize: '14px', lineHeight: '110%', letterSpacing: '0px' },
    bodyL: { fontWeight: 400, fontSize: '18px', lineHeight: '140%', letterSpacing: '0px' },
    bodyM: { fontWeight: 400, fontSize: '16px', lineHeight: '140%', letterSpacing: '0px' },
    bodyS: { fontWeight: 400, fontSize: '14px', lineHeight: '140%', letterSpacing: '0px' },
    bodyXS: { fontWeight: 400, fontSize: '12px', lineHeight: '140%', letterSpacing: '0px' },
    bodyXXS: { fontWeight: 400, fontSize: '10px', lineHeight: '140%', letterSpacing: '0px' },
    caption: { fontWeight: 700, fontSize: '20px', lineHeight: '100%', letterSpacing: '1px' },
    buttonL: { fontWeight: 500, fontSize: '20px', lineHeight: '100%', letterSpacing: '0.5px' },
    buttonM: { fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0.5px' },
    buttonS: { fontWeight: 500, fontSize: '14px', lineHeight: '100%', letterSpacing: '0.5px' },
    menuTabs: { fontWeight: 500, fontSize: '16px', lineHeight: '100%', letterSpacing: '0px' },
  },
  fonts: {
    primary: "'Roboto', sans-serif",
  },
};
