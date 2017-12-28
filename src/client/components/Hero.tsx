import * as React from 'react';
import styled from 'styled-components';
import Muted from './Muted';
import { pxToRem, type, headerFont } from '../styles/utils';
import { maxWidth, horizontalPadding, TYPE_SIZE } from '../styles/vars';

const largeBreakPoint = 850;

interface Props {
  className?: string;
}

const HeroCopy = styled.div`
  ${headerFont()}
  position: relative;
  max-width: 6em;

  @media (min-width: ${pxToRem(largeBreakPoint)}) {
    bottom: ${pxToRem(TYPE_SIZE.jumbo[0] * -0.8)};
  }
`;

const Hero: React.SFC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <HeroCopy>
        <Muted>Freelance</Muted> Developer, Teacher &amp; Consultant
      </HeroCopy>
    </div>
  );
};

Hero.displayName = 'Hero';

export default styled(Hero)`
  ${type(TYPE_SIZE.jumbo)}
  background-color: #e4e4e4;
  text-transform: uppercase;
  padding: 1rem ${pxToRem(horizontalPadding)};
  max-width: ${pxToRem(maxWidth)};
  margin: auto;

  @media (min-width: ${pxToRem(largeBreakPoint)}) {
    padding-top: ${pxToRem(140)};
  }
`;
