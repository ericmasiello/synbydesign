import * as React from 'react';
import styled from 'styled-components';
import Muted from './Muted';
import Highlighted from './Highlighted';
import HeroCopy from './HeroCopy';
import TypeJumbo from './TypeJumbo';
import { pxToRem } from '../styles/utils';
import {
  maxWidth,
  horizontalPadding,
  HERO,
  MEDIA_QUERIES,
} from '../styles/vars';

interface Props {
  className?: string;
}

const Hero: React.SFC<Props> = ({ className }) => {
  return (
    <TypeJumbo tag="div" className={className} scale>
      <HeroCopy>
        <Muted>Freelance</Muted> <Highlighted>Developer</Highlighted>, Trainer
        &amp; Consultant
      </HeroCopy>
    </TypeJumbo>
  );
};

Hero.displayName = 'Hero';

export default styled(Hero)`
  background-color: #e4e4e4;
  text-transform: uppercase;
  padding: 1rem ${pxToRem(horizontalPadding)};
  max-width: ${pxToRem(maxWidth)};
  margin: auto;

  @media (min-width: ${pxToRem(MEDIA_QUERIES.large)}) {
    padding-top: ${pxToRem(140)};
    margin-bottom: ${pxToRem(HERO.typeOffset)};
  }
`;
