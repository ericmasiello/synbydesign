import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
// import styles from './AnimatedLink.module.css';
import { css } from '@synbydesign/common-ui';

const styles = css({
  position: 'relative',
  color: 'var(--color-link)',
  textDecoration: 'none',
  transition: 'color ease 0.3s',
  '&:hover': {
    color: 'var(--color-brand)',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '1px',
    left: '0',
    bottom: '-3px',
    backgroundColor: 'var(--color-brand)',
    transition: 'all ease 0.3s',
  },
  '&:hover::after': {
    height: '25%',
  },
});

function AnimatedLink(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles(), className);
  return <Component className={classes} {...rest} />;
}

AnimatedLink.defaultProps = {
  as: Link,
};

AnimatedLink.propTypes = {
  as: PropTypes.elementType,
};

export default AnimatedLink;
