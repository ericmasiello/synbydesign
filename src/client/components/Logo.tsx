import * as React from 'react';
import styled from 'styled-components';
import * as logo from '../images/synbydesignlogo.svg';
import { pxToRem } from '../styles/utils';
import { COLORS } from '../styles/vars';

interface Props {
  className?: string;
}

export const Logo: React.SFC<Props> = ({ className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: logo }} />
);

export default styled(Logo)`
  display: flex;

  svg {
    fill: ${COLORS.logo};
    stroke: ${COLORS.logo};
    height: ${pxToRem(40)};
  }
`;
