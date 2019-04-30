import styled from 'styled-components';
import DynamicTag from './DynamicTag';
import { COLORS } from '../styles/vars';

const Muted = styled(DynamicTag)`
  color: ${COLORS.muted};
`;

Muted.displayName = 'Muted';

export default Muted;
