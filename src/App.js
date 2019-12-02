import React from 'react';
import { hot } from 'react-hot-loader/root';
import { GlobalStyle, theme } from 'Themes';
import { ThemeProvider } from 'styled-components';

import WeatherForecast from 'Pages';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WeatherForecast />
    </ThemeProvider>
  </div>
);

export default hot(App);
