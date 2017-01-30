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
  return ({
    title,
    custom_meta,
    // featured_image,
    content: $img.wrap('<div></div>').parent().html(),
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
