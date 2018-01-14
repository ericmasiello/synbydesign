import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../styles/utils';
import { maxWidth, horizontalPadding } from '../styles/vars';

interface Props {
  className?: string;
}

export const HeaderContent: React.SFC<Props> = props => (
  <div className={props.className}>
    {props.children}
  </div>
);

HeaderContent.displayName = 'Header.Content';

const StyledHeaderContent = styled(HeaderContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${pxToRem(maxWidth)};
  padding: 1rem ${pxToRem(horizontalPadding)};
  margin: auto;

  @media(min-width: ${pxToRem(850)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default StyledHeaderContent;