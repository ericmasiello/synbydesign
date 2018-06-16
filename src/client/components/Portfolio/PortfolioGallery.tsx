import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Item from './PortfolioItem';
import { pxToRem } from '../../styles/utils';
import { maxWidth, GALLERY } from '../../styles/vars';
import GalleryItem from './PortfolioGalleryItem';
import GalleryLink from './PortfolioGalleryLink';
import Heart from '../Heart';
import likes from '../../state/likes/';
import { ThunkActionCreator } from '../../../types';

interface Props extends React.HTMLProps<HTMLElement> {
  items: Portfolio[];
  tag?: Tag;
  addLike: ThunkActionCreator<Like>;
}

interface DefaultProps {
  items: Portfolio[];
  tag: Tag;
}

export const PortfolioGallery: React.SFC<Props> = props => {
  const { items, tag: Tag, addLike, ...rest } = props as Props & DefaultProps;
  return (
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
  items: [] as Portfolio[],
  tag: 'ul',
} as DefaultProps;

const StyledPortfolioGallery = styled(PortfolioGallery)`
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { addLike: likes.addLike })(
  StyledPortfolioGallery,
);
