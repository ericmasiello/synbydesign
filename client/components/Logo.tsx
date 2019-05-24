import * as React from 'react';
import * as logo from '../images/synbydesignlogo.svg';
import * as styles from './Logo.scss';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
  tag?: Tag;
}

const Logo: React.SFC<Props> = props => {
  const { tag: Tag = 'div', className, ...rest } = props;
  return (
    <Tag
      className={classNames(styles.logo, className)}
      {...rest}
      dangerouslySetInnerHTML={{ __html: logo }}
    />
  );
};

export default Logo;
