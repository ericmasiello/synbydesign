import * as React from 'react';
import * as logo from '../images/synbydesignlogo.svg';
import * as styles from './Logo.scss';
import classNames from 'classnames';

interface Props extends FlexibleComponentProps {}

const Logo: React.SFC<Props> = props => {
  const { as: Comp = 'div', className, ...rest } = props;
  return (
    <Comp
      className={classNames(styles.logo, className)}
      {...rest}
      dangerouslySetInnerHTML={{ __html: logo }}
    />
  );
};

export default Logo;
