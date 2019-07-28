import * as React from 'react';
import classNames from 'classnames';
import * as styles from './Highlighted.scss';

interface Props extends FlexibleComponentProps {}

const Highlighted: React.SFC<Props> = props => {
  const { className, as: Comp = 'span', ...rest } = props;
  const classes = classNames(styles.highlighted, className);
  return <Comp className={classes} {...rest} />;
};

export default Highlighted;
