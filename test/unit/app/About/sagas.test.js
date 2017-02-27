import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import { fetchAbout, Api } from '../../../../src/app/About/sagas';
import { LOAD_ABOUT_SUCCEEDED } from '../../../../src/app/About/actions';

describe.only('About Sagas', function () {
  it('should work', function () {
    expect(true).to.equal(true);
  });

  it('should fetch about', () => {
    const generator = fetchAbout();
    expect(generator.next().value).to.deep.equal(call(Api.fetchAbout));
    const aboutResponse = {
      content: 'Hello world',
    };
    expect(generator.next(aboutResponse).value).to.deep.equal(put({
      type: LOAD_ABOUT_SUCCEEDED,
      payload: 'Hello world',
    }));
  });
});
