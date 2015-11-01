'use strict';

import jQuery from 'jquery';

var getPropFromSource = function (html, prop) {

  //return $sce.trustAsResourceUrl(html);
  if (typeof html !== 'string') {

    return '';
  }

  var regex = new RegExp('<img.*?' + prop + '="(.*?)"|<img.*?' + prop + '=\'(.*?)\'/');
  var matches = html.match(regex);

  if (jQuery.isArray(matches) === false || matches.length < 2) {

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