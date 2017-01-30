const fs = require('fs');
const stub = require('./stub.json');
const cheerio = require('cheerio');
const _ = require('lodash');

const buildSizes = (featured_image) => {
  const { attachment_meta, source } = featured_image;
  if (!attachment_meta) {
    return {};
  }

  const sizes = _.reduce(attachment_meta.sizes, (acc, size, key) => {
    if(key === 'post-thumbnail') {
      return acc;
    }
    return Object.assign({}, acc, {
      [key]: {
        url: size.url,
        width: size.width,
        height: size.height,
      }
    });
  }, {
    full: {
      url: source,
      width: attachment_meta.width,
      height: attachment_meta.height,
    }
  });

  return sizes;
};

const result = stub.map(({
  title,
  custom_meta,
  content,
  terms,
  featured_image,
}) => {
  const $ = cheerio.load(content);
  const $img = $('img').attr('class', '');
  const description = $img.attr('alt');
  const { mix_url, stack_design, svg, track_list, website_url } = custom_meta;
  return ({
    title,
    description,
    meta: {
      stackDesign: stack_design,
      mixUrl: mix_url,
      trackList: track_list,
      websiteUrl: website_url,
      isSVG: !!svg,
    },
    category: terms.category.map(category => category.slug),
    tags: Array.isArray(terms.post_tag) ? terms.post_tag.map(tag => tag.name) : [],
    svgSource: svg || null,
    imagePaths: buildSizes(featured_image),
  });
});

// console.log(result);

fs.writeFile('./data/result.json', JSON.stringify(result, null, 2), 'utf8', (err) => {
  if (err) {
    return console.log('Error', err);
  }
  console.log('All done!');
  return true;
});
