import styled from 'styled-components';
import { pxToRem, headerFont } from '../styles/utils';
import { MEDIA_QUERIES, HERO } from '../styles/vars';

const HeroCopy = styled.div`
  ${headerFont()} position: relative;
  max-width: 6em;

  @media (min-width: ${pxToRem(MEDIA_QUERIES.large)}) {
    bottom: ${pxToRem(HERO.typeOffset * -1)};
  }
`;

HeroCopy.displayName = 'Hero.Copy';

export default HeroCopy;