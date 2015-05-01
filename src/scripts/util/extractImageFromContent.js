var jQuery = require('jquery');

function extractDetailImageFromHTMLHandler( html ){

  //return $sce.trustAsResourceUrl(html);
  if (typeof html !== 'string' ){

    return '';
  }

  var matches = html.match(/<img.*?src="(.*?)"|<img.*?src='(.*?)'/);

  if (jQuery.isArray(matches) === false || matches.length < 2){

    return '';
  }

  return matches[1];
};

module.exports = extractDetailImageFromHTMLHandler;