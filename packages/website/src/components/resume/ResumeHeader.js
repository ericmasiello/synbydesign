import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { H } from '../Type';
// import styles from './ResumeHeader.module.css';
import { css } from '@synbydesign/common-ui';

const headerStyles = css({
  background: 'linear-gradient(90deg, rgba(78, 0, 94, 0.95) 14%, rgba(19, 52, 185, 0.95) 100%)',
  color: '#fff',
  padding: 'var(--resume-v-gap) var(--resume-h-gap)',
  marginLeft: 'calc(var(--resume-h-gap) * -1)',
  marginRight: 'calc(var(--resume-h-gap) * -1)',
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)',
});

const nameStyles = css({
  marginBottom: '0',
});

const titleStyles = css({
  marginBottom: '0.25rem',
  color: 'var(--color-brand-invert)',
});

function ResumeHeader(props) {
  const { as: Component, ownerName, ownerTitle, lead, className, ...rest } = props;
  const classes = classNames(headerStyles(), className);

  return (
    <Component className={classes} {...rest}>
      <H level={4} as="h3" className={nameStyles()}>
        {ownerName}
      </H>
      <H level={6} as="h4" className={titleStyles()}>
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
