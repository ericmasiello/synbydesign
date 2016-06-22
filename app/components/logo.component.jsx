'use strict';
import React from 'react';
import { Link } from 'react-router';

const Logo = ( props ) => {

  const { logoID, view } = props;
  const isDetail = (view === 'detail') ? true : false;
  const cssClass = isDetail ? 'logo--detail' : '';
  const content = (
    <span>
      { isDetail
        ? <span className="visually-hidden">Back to Syn By Design home page</span>
        : <span className="visually-hidden">Syn By Design</span>
      }
      <svg className={`logo  logo__head  ${cssClass}`}>
        <use href="#syn-logo" />
      </svg>
      <svg className={`logo  logo__title  ${cssClass}`}>
        <use href="#syn-title" />
      </svg>
      <svg className={`logo  logo__slogan  ${cssClass}`}>
        <use href="#syn-slogan" />
      </svg>
    </span>
  );

  return (
    <h1 className="masthead__logo__title" id={ isDetail ? '' : logoID}>
      { isDetail ? <Link to="/" id={logoID}>{content}</Link> : content }
    </h1>
  );
};

Logo.propTypes = {
  logoID: React.PropTypes.string.isRequired,
  view: React.PropTypes.oneOf(['detail', 'home']),
};

Logo.defaultProps = {
  view: 'home'
};

export default Logo;
