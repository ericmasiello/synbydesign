import styled from 'styled-components';
import DynamicTag from './DynamicTag';
import { COLORS } from '../styles/vars';

const Highlighted = styled(DynamicTag)`
  color: ${COLORS.highlight};
`;

Highlighted.displayName = 'Highlighted';

export default Highlighted;
