import React from 'react';
import classNames from 'classnames';
import { css } from './stitches';

const styles = css({
  position: 'absolute !important',
  height: '1px',
  width: '1px',
  overflow: 'hidden',
  clip: ['rect(1px 1px 1px 1px)', 'rect(1px, 1px, 1px, 1px)'],
  whiteSpace: 'nowrap',
});

function VisuallyHidden(props) {
  const { className, as: Component = 'span', ...rest } = props;
  const classes = classNames(styles(), className);
  return <Component className={classes} {...rest} />;
}

export default VisuallyHidden;
