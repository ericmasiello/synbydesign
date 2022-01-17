import React from 'react';
import classNames from 'classnames';
// import { css } from '@stitches/react';
import { css } from '@synbydesign/common-ui';

const styles = css({
  padding: '0 2.5rem',
  maxWidth: 'var(--content-max-width)',
  margin: '0 auto',
});

function Container(props) {
  const { component: Component = 'div', className, ...rest } = props;

  const classes = classNames(styles(), className);

  return <Component className={classes} {...rest} />;
}

export default Container;
