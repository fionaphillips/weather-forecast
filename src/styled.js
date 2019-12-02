import { createGlobalStyle } from 'styled-components';
import background from '../images/cloudy-sky.jpg';

export const GlobalStyle = createGlobalStyle`
html,  
body {
    height: 100%;
    margin: 0;
    background-image: url(${background});
  }
`;

export const theme = {
  mediaQueries: {
    mobileXS: '320px',
    mobileS: '360px',
    mobileM: '375px',
    mobileL: '414px',
    tabletS: '600px',
    tabletM: '768px',
    desktopS: '1280px',
    desktopM: '1440px',
    desktopL: '1920px',
  },
};

export const device = {
  mobileXS: `(min-width: ${theme.mediaQueries.mobileXS})`,
  mobileS: `(min-width: ${theme.mediaQueries.mobileS})`,
  mobileM: `(min-width: ${theme.mediaQueries.mobileM})`,
  mobileL: `(min-width: ${theme.mediaQueries.mobileL})`,
  tabletS: `(min-width: ${theme.mediaQueries.tabletS})`,
  tabletM: `(min-width: ${theme.mediaQueries.tabletM})`,
  desktopS: `(min-width: ${theme.mediaQueries.desktopS})`,
  desktopM: `(min-width: ${theme.mediaQueries.desktopM})`,
  desktopL: `(min-width: ${theme.mediaQueries.desktopL})`,
};
