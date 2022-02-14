import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { H } from '../Type';
import * as styles from './ResumeHeader.module.css';

function ResumeHeader(props) {
  const { as: Component, ownerName, ownerTitle, lead, className, ...rest } = props;
  const classes = classNames(styles.header, className);

  return (
    <Component className={classes} {...rest}>
      <H level={4} component="h3" className={styles.name}>
        {ownerName}
      </H>
      <H level={6} component="h4" className={styles.title}>
        {ownerTitle}
      </H>
      <p>{lead}</p>
    </Component>
  );
}

ResumeHeader.defaultProps = {
  as: 'hgroup',
};

ResumeHeader.propTypes = {
  as: PropTypes.elementType,
};

export default ResumeHeader;
