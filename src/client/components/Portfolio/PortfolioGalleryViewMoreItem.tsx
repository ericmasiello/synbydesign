import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

export const GalleryViewMoreItem: React.SFC<Props> = props => {
  const { tag: Tag, ...rest } = props as Props & DefaultProps;
  return <Tag {...rest} />;
};

GalleryViewMoreItem.defaultProps = {
  tag: 'li',
} as DefaultProps;

GalleryViewMoreItem.displayName = 'PortfolioGallery.ViewMoreItem';

export default styled(GalleryViewMoreItem)`
  grid-column-start: 1;
  grid-column-end: -1;
  text-align: center;
`;
