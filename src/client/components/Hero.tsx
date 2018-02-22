import * as React from 'react';
import styled from 'styled-components';
import Muted from './Muted';
import Highlighted from './Highlighted';
import HeroCopy from './HeroCopy';
import { pxToRem, type } from '../styles/utils';
import {
  maxWidth,
  horizontalPadding,
  TYPE_SIZE,
  HERO,
  MEDIA_QUERIES,
} from '../styles/vars';

interface Props {
  className?: string;
}

const Hero: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <HeroCopy>
        <Muted>Freelance</Muted> <Highlighted>Developer</Highlighted>, Teacher
        &amp; Consultant
      </HeroCopy>
    </div>
  );
};

Hero.displayName = 'Hero';

export default styled(Hero)`
  ${type(TYPE_SIZE.jumbo)} background-color: #e4e4e4;
  text-transform: uppercase;
  padding: 1rem ${pxToRem(horizontalPadding)};
  max-width: ${pxToRem(maxWidth)};
  margin: auto;

  @media (min-width: ${pxToRem(MEDIA_QUERIES.large)}) {
    padding-top: ${pxToRem(140)};
    margin-bottom: ${pxToRem(HERO.typeOffset)};
  }
`;
