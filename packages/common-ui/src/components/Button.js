import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from './stitches';

const styles = css({
  border: '1px solid $colors$base',
  fontWeight: 'var(--font-body-weight-bold)',
  backgroundColor: '$colors$bg',
  textTransform: 'uppercase',
  padding: '0.5rem 1.5rem',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: 'rgb(245, 245, 245)',
  },
  '&:focus': {
    backgroundColor: 'rgb(245, 245, 245)',
  },
});

function Button(props) {
  const { as: Component, className, ...rest } = props;
  const classes = classNames(styles(), className);
  return <Component className={classes} {...rest} />;
}

Button.defaultProps = {
  as: 'button',
};

Button.propTypes = {
  as: PropTypes.elementType,
};

export default Button;
