import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RelatedExperienceWebsite.module.css';

function RelatedExperienceWebsite(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles.experience, className);
  return <Component className={classes} {...rest} />;
}

RelatedExperienceWebsite.defaultProps = {
  as: 'div',
};

RelatedExperienceWebsite.propTypes = {
  as: PropTypes.elementType,
};

export default RelatedExperienceWebsite;
