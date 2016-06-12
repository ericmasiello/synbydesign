'use strict';
import React from 'react';
import { Link } from 'react-router';

const Logo = ( props ) => {

  const { logoID, view } = props;
  const isDetail = (view === 'detail') ? true : false;
  const svgLogo = '<use xlink:href="#syn-logo" />';
  const svgTitle = '<use xlink:href="#syn-title" />';
  const svgSlogan = '<use xlink:href="#syn-slogan" />';
  const cssClass = isDetail ? 'logo--detail' : '';
  const content = (
    <span>
      { isDetail
        ? <span className="visually-hidden">Back to Syn By Design home page</span>
        : <span className="visually-hidden">Syn By Design</span>
      }
      <svg className={`logo  logo__head  ${cssClass}`} dangerouslySetInnerHTML={{__html: svgLogo}}/>
      <svg className={`logo  logo__title  ${cssClass}`} dangerouslySetInnerHTML={{__html: svgTitle}}/>
      <svg className={`logo  logo__slogan  ${cssClass}`} dangerouslySetInnerHTML={{__html: svgSlogan}}/>
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
  view: React.PropTypes.oneOf(['detail', 'home']).isRequired,
};

export default Logo;
