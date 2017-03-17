import {
  call,
  put,
} from 'redux-saga/effects';
import fetchAbout from '../../../../src/app/About/sagaSubroutines';
import Api from '../../../../src/app/api';
import {
  LOAD_ABOUT_SUCCEEDED,
  LOAD_ABOUT_FAILED,
} from '../../../../src/app/About/actions';

describe('About Sagas', () => {
  it('should work', () => {
    expect(true).toEqual(true);
  });

  it('should fetch about content', () => {
    const generator = fetchAbout();
    expect(generator.next().value).toEqual(call(Api.fetchAbout));
    const aboutResponse = {
      content: 'Hello world',
    };
    expect(generator.next(aboutResponse).value).toEqual(put({
      type: LOAD_ABOUT_SUCCEEDED,
      payload: 'Hello world',
    }));
  });

  it('should fail to fetch about content', () => {
    const generator = fetchAbout();
    expect(generator.next().value).toEqual(call(Api.fetchAbout));
    const error = new Error('An error occurred');
    expect(generator.throw(error).value).toEqual(put({
      type: LOAD_ABOUT_FAILED,
      message: 'An error occurred',
    }));
  });
});
