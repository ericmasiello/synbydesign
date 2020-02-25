import React from 'react';
import PropTypes from 'prop-types';
import { H } from '../Type';
import styles from './ResumeHeader.module.css';

function ResumeHeader(props) {

  const { as: Component, ownerName, ownerTitle, lead, className, ...rest } = props;
  return (
    <Component className={className} {...rest}>
      <H level={4} as="h2" className={styles.name}>{ownerName}</H>
      <H level={6} as="h3" className={styles.title}>{ownerTitle}</H>
      <p>{lead}</p>
    </Component>
  )
}

ResumeHeader.defaultProps = {
  as: 'hgroup'
}

ResumeHeader.propTypes = {
  as: PropTypes.elementType,
}

export default ResumeHeader;
