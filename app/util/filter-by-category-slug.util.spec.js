import expect from 'expect';
import filter from './filter-by-category-slug.util';

describe('Filter Portfolio By Type Utility', () => {

  it('should return a filter function when passing it the first argument', ()=>{

    const actual = filter(['birds', 'bees']);
    const expected = 'function';

    expect(typeof actual).toEqual(expected);
  });

  it('should filter a list of items based on its terms.category[].slug', ()=>{

    const list = [{
      ID: 1,
      terms:{
        category: [{
          slug: 'birds'
        }]
      }
    },{
      ID: 2,
      terms:{
        category: [{
          slug: 'other'
        },{
          slug: 'bees'
        }]
      }
    },{
      ID: 3,
      terms:{
        category: [{
          slug: 'other'
        },{
          slug: 'things'
        }]
      }
    }];
    const actual = list.filter(filter(['birds', 'bees'])).map( item => { return item.ID });
    const expected = [1, 2];

    expect(actual).toEqual(expected);
  });
});