import styled from 'styled-components';
import Tag from './Tag';
import { COLORS } from '../styles/vars';

const Muted = styled(Tag)`
  color: ${COLORS.muted};
`;

Muted.displayName = 'Muted';

export default Muted;
