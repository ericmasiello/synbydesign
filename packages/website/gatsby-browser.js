import './src/styles/global.css';
import GatsbyPageWrapper from './src/components/GatsbyPageWrapper';

export const wrapPageElement = GatsbyPageWrapper;

export const onInitialClientRender = () => {
  document.querySelector('#google-font-link').onload = function () {
    // change to 'all' so that fonts are applied to page
    this.media = 'all';
  };
};
