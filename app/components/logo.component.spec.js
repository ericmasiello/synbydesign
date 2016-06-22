'use strict';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import Logo from './logo.component';
import { Link } from 'react-router';

describe('Logo', () => {
  let r;
  let actual;
  let expected;

  beforeEach(()=>{
    r = TestUtils.createRenderer();
  });

  afterEach(()=>{
    r = undefined;
    actual = undefined;
    expected = undefined;
  });

  it('should render as an h1 tag', () => {
    r.render(<Logo logoID="the-id" />);
    actual = r.getRenderOutput();
    expected = 'h1';

    expect(actual.type).toEqual(expected);
  });

  describe('should set the the detail view', ()=>{

    beforeEach(()=>{
      r.render(<Logo logoID="the-id" view="detail" />);
      actual = r.getRenderOutput();
    });

    it('should set the id attribute', ()=>{
      expect(actual.props.id).toEqual('');
    });

    it('should set the appropriate visually hidden text and include a Link back home', ()=>{
      expect(actual).toIncludeJSX(
        <Link to="/" id="the-id">
          <span>
            <span className="visually-hidden">Back to Syn By Design home page</span>
            <svg className={`logo  logo__head  logo--detail`}>
              <use href="#syn-logo" />
            </svg>
            <svg className={`logo  logo__title  logo--detail`}>
              <use href="#syn-title" />
            </svg>
            <svg className={`logo  logo__slogan  logo--detail`}>
              <use href="#syn-slogan" />
            </svg>
          </span>
        </Link>);
    });
  });

  describe('should set the the default view', ()=>{

    beforeEach(()=>{
      r.render(<Logo logoID="the-id" />);
      actual = r.getRenderOutput();
    });

    it('should set the id attribute', ()=>{
      expect(actual.props.id).toEqual('the-id');
    });

    it('should set the appropriate visually hidden text and link', ()=>{
      expect(actual).toIncludeJSX(<span className="visually-hidden">Syn By Design</span>);
    });
  });
});
