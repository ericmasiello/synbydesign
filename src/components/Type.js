import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as styles from './Type.module.css';

export function H(props) {
  const { as: Component, level, className, bold, upper, ...rest } = props;
  const classes = classNames(
    styles.h,
    {
      [styles[`h${level}`]]: !!level,
      [styles.hUpper]: !!upper,
      [styles.hBold]: !!bold,
    },
    className
  );
  return <Component className={classes} {...rest} />;
}

H.defaultProps = {
  as: 'span',
};

H.propTypes = {
  as: PropTypes.elementType,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  bold: PropTypes.bool,
  upper: PropTypes.bool,
};

export function Text(props) {
  const { as: Component, small, className, ...rest } = props;
  const classes = classNames(
    styles.text,
    {
      [styles.textSmall]: small,
    },
    className
  );
  return <Component className={classes} {...rest} />;
}

Text.defaultProps = {
  as: 'span',
};

Text.propTypes = {
  as: PropTypes.elementType,
  small: PropTypes.bool,
};

export function Highlight(props) {
  const { as: Component, small, className, ...rest } = props;
  const classes = classNames(styles.highlight, className);
  return <Component className={classes} {...rest} />;
}

Highlight.defaultProps = {
  as: 'span',
};

Highlight.propTypes = {
  as: PropTypes.elementType,
};

export function Muted(props) {
  const { as: Component, small, className, ...rest } = props;
  const classes = classNames(styles.muted, className);
  return <Component className={classes} {...rest} />;
}

Muted.defaultProps = {
  as: 'span',
};

Muted.propTypes = {
  as: PropTypes.elementType,
};
