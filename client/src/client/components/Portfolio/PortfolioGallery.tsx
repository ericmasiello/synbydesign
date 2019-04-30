import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { maxWidth, GALLERY } from '../../styles/vars';
import Heart from '../Heart';

interface Props extends React.HTMLProps<HTMLUListElement> {
  tag?: Tag;
}

export const PortfolioGallery: React.SFC<Props> = props => {
  const { tag: Tag, ...rest } = props;

  // @ts-ignore
  return <Tag {...rest} />;
};

PortfolioGallery.displayName = 'PortfolioGallery';
PortfolioGallery.defaultProps = {
  tag: 'ul',
};

export default styled(PortfolioGallery)`
  max-width: ${pxToRem(maxWidth)};
  padding: 0;
  margin: 0 auto;
  list-style-type: none;

  @media (min-width: ${pxToRem(GALLERY.minItemSize * 2)}) {
    display: grid;
    grid-gap: ${pxToRem(GALLERY.itemPadding)};
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${pxToRem(GALLERY.minItemSize * 3)}) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(${pxToRem(GALLERY.minItemSize)}, 1fr)
    );
    grid-auto-rows: ${pxToRem(GALLERY.minItemSize)};
  }

  ${Heart} {
    position: absolute;
    bottom: ${pxToRem(5)};
    right: ${pxToRem(5)};
  }
`;
