'use strict';

const getPropFromSource = function (html, prop) {

  if (typeof html !== 'string') {

    return '';
  }

  const regex = new RegExp(`<img.*?${prop}="(.*?)"|<img.*?${prop}=\'(.*?)\'/`);
  const matches = html.match(regex);

  if (Array.isArray(matches) === false || matches.length < 2) {

    return '';
  }

  return matches[1];
};

export default {

  getSource(html) {

    return getPropFromSource(html, 'src');
  },

  getAltText(html) {

    return getPropFromSource(html, 'alt');
  },

  getWidth(html) {

    return getPropFromSource(html, 'width');
  },

  getHeight(html) {

    return getPropFromSource(html, 'height');
  }
};