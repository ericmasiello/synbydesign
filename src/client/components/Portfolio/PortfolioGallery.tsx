import * as React from 'react';
import styled from 'styled-components';
import Item from './PortfolioItem';
import { pxToRem } from '../../styles/utils';
import { maxWidth, GALLERY } from '../../styles/vars';
import GalleryItem from './PortfolioGalleryItem';
import GalleryLink from './PortfolioGalleryLink';
import Heart from '../Heart';
import { ThunkActionCreator } from '../../../types';

interface Props extends React.HTMLProps<HTMLElement> {
  items: LikedPortfolio[];
  tag?: Tag;
  addLike: ThunkActionCreator<Like>;
}

export const PortfolioGallery: React.SFC<Props> = props => {
  const { items, tag: Tag, addLike, ...rest } = props;
  return (
    // @ts-ignore
    <Tag {...rest}>
      {items.map(item => {
        const row = item.meta && item.meta.thumb && item.meta.thumb.row;
        const column = item.meta && item.meta.thumb && item.meta.thumb.column;

        return (
          <GalleryItem key={item.id} row={row} column={column}>
            <GalleryLink to={`/portfolio/${item.id}`}>
              <Item {...item} />
              <Heart
                data-id={item.id}
                onClick={event => {
                  event.preventDefault();
                  addLike(item.id);
                }}
                selected={item.liked}
              />
            </GalleryLink>
          </GalleryItem>
        );
      })}
    </Tag>
  );
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
