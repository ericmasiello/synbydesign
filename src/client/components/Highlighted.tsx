import styled from 'styled-components';
import Tag from './Tag';
import { COLORS } from '../styles/vars';

const Highlighted = styled(Tag)`
  color: ${COLORS.highlight};
`;

Highlighted.displayName = 'Highlighted';

export default Highlighted;
