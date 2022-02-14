import React from 'react';
import PropTypes from 'prop-types';

function RelatedExperienceWebsite(props) {
  const { as: Component, className, ...rest } = props;
  return <Component className={className} {...rest} />;
}

RelatedExperienceWebsite.defaultProps = {
  as: 'div',
};

RelatedExperienceWebsite.propTypes = {
  as: PropTypes.elementType,
};

export default RelatedExperienceWebsite;
