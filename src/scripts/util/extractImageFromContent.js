var jQuery = require('jquery');

var getPropFromSource = function(html, prop){

  //return $sce.trustAsResourceUrl(html);
  if (typeof html !== 'string' ){

    return '';
  }

  var regex = new RegExp('<img.*?' + prop + '="(.*?)"|<img.*?' + prop + '=\'(.*?)\'/');
  var matches = html.match(regex);

  if (jQuery.isArray(matches) === false || matches.length < 2){

    return '';
  }

  return matches[1];
};

var ImagePropExtractor = {

  getSource: function(html){

    return getPropFromSource(html, 'src');
  },

  getAltText: function(html){

    return getPropFromSource(html, 'alt');
  },

  getWidth: function(html){

    return getPropFromSource(html, 'width');
  },

  getHeight: function(html){

    return getPropFromSource(html, 'height');
  }
};

module.exports = ImagePropExtractor;