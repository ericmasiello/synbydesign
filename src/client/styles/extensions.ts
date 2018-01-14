import styled from 'styled-components';
import { pxToRem } from './utils';
import { horizontalPadding, maxWidth } from './vars';

export const PageContainer = styled.div`
  max-width: ${pxToRem(maxWidth)};
  padding-left: ${pxToRem(horizontalPadding)};
  padding-right: ${pxToRem(horizontalPadding)};
`;
