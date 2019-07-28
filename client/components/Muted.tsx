import * as React from 'react';
import classNames from 'classnames';
import * as styles from './Muted.scss';

interface Props extends FlexibleComponentProps {}

const Muted: React.SFC<Props> = props => {
  const { className, as: Comp = 'span', ...rest } = props;
  const classes = classNames(styles.muted, className);
  return <Comp className={classes} {...rest} />;
};

export default Muted;
