const fs = require('fs');
const stub = require('./stub.json');
const cheerio = require('cheerio');

const result = stub.map(({
  title,
  custom_meta,
  // featured_image,
  content,
  source,
  terms,
}) => {
  const $ = cheerio.load(content);
  const $img = $('img').attr('class', '');
  const { mix_url, stack_design, svg, track_list, website_url } = custom_meta;
  return ({
    title,
    // featured_image,
    meta: {
      stack_design,
      mix_url,
      track_list,
      website_url,
      is_svg: !!svg,
    },
    image: svg || $img.wrap('<div></div>').parent().html(),
    source,
    category: terms.category.map(category => category.slug),
    tags: Array.isArray(terms.post_tag) ? terms.post_tag.map(tag => tag.name) : [],
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
