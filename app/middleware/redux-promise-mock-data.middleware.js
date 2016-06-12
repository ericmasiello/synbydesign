'use strict';

export const transformMockData = (origData, url, patternObj) => {
  let newData;
  let matches;

  if(!(typeof url === 'string' && url.length > 0 && patternObj)) {
    return origData;
  }

  newData = Object.assign({}, origData);

  for(let key in patternObj) {
    matches = url.match(patternObj[key]);
    if(matches.length) {
      newData = Object.assign({}, newData, {
        [key]: typeof origData[key] === 'number' ? parseFloat(matches[0]) : matches[0]
      });
    }
  }
  return newData;
};

export default (props) => store => next => action => { //eslint-disable-line strict

  if( Object.keys(props).indexOf(action.type) >= 0  && action.error) {

    let mockData;

    if(typeof props[action.type].substitutePropsFromUrl === 'object') {
      mockData = transformMockData(props[action.type].data,
        action.payload.config.url,
        props[action.type].substitutePropsFromUrl);
    } else {
      mockData = props[action.type];
    }

    const actionWithMock = Object.assign({}, action, {
      payload: {
        data: mockData
      },
      error: false,
      meta: {
        isMocked: true
      }
    });

    store.dispatch(actionWithMock);
    return;
  }

  return next(action);
};
