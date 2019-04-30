import * as React from 'react';
import styled from 'styled-components';
import * as logo from '../images/synbydesignlogo.svg';
import { pxToRem } from '../styles/utils';
import { COLORS } from '../styles/vars';

interface Props extends React.HTMLProps<HTMLDivElement> {
  tag?: Tag;
}

export const Logo: React.SFC<Props> = props => {
  const { tag: Tag, ...rest } = props;
  // @ts-ignore
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: logo }} />;
};

Logo.defaultProps = {
  tag: 'div',
};

export default styled(Logo)`
  display: flex;
  margin: 0;

  svg {
    fill: ${COLORS.logo};
    stroke: ${COLORS.logo};
    height: ${pxToRem(40)};
  }
`;
