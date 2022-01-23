import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    charcoal: '#48484A',
    darkGray: '#3D3D3E',
    tan: '#FFE5D9',
    orange: '#E07A5F',
    blue: '#5C8084',
    lightBlue: '#929AA2',
    green: '#5C846A'
  },

  fonts: {
    primary: 'Nunito',
    secondary: 'Alegreya'
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
    para: 'clamp(1.3rem, -0.875rem + 6.333vw, 1.5rem)',
    para2: 'clamp(1.1rem, -0.875rem + 6.333vw, 1.5rem)'
  },
  shadow: {
    box: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
  }


};

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
