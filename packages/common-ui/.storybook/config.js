/* eslint-disable import/no-extraneous-dependencies, global-require */
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';

const theme = create({
  base: 'light',

  // Typography
  fontBase: '"Lato", sans-serif',

  brandTitle: '<Placeholder Title Goes Here>',
  brandUrl: 'https://example.com',
});


addDecorator(withInfo);
addDecorator(withKnobs);
addParameters({
  options: {
    theme,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});


function loadStories() {
  // forces index.story to load first
  require('../src/storybook/index.story');

  // load additional stories
  const req = require.context('../src', true, /\.story\.jsx?$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
