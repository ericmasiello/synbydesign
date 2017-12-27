import * as React from 'react';
import styled from 'styled-components';
import * as logo from '../images/synbydesignlogo.svg';

interface Props {
  className?: string;
}

export const Logo: React.SFC<Props> = ({ className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: logo }}
  />
);

export default styled(Logo)`
  svg {
    fill: #fff;
    stroke: #fff;
    height: 40px;
  }
`;
