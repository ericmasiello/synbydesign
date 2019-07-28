import * as React from 'react';
import classNames from 'classnames';
import * as styles from './Type.scss';

interface Props extends FlexibleComponentProps {}

const createType = (name: string, { defaultAs = 'h1', selector = '' } = {}) => {
  const Type: React.SFC<Props> = props => {
    const { className, as: Comp = defaultAs, ...rest } = props;
    const classes = classNames(styles[selector], className);
    return <Comp className={classes} {...rest} />;
  };

  Type.displayName = `Type(${name})`;
  return Type;
};

export const TypeJumbo = createType('Jumbo', { selector: 'jumbo' });
export const Type1 = createType('Type1', { selector: 'type1' });
export const Type2 = createType('Type2', { selector: 'type2' });
export const Type3 = createType('Type3', { selector: 'type3' });
export const Type4 = createType('Type4', { selector: 'type4' });
export const Type5 = createType('Type5', { selector: 'type5' });
export const Base = createType('Base', { selector: 'base' });
export const Small = createType('Small', { selector: 'small' });
