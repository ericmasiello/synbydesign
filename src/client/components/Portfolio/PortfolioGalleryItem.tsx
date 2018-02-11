import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { GALLERY } from '../../styles/vars';

interface Props {
  className?: string;
  featured?: boolean;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

export const GalleryItem: React.SFC<Props> = (props) => {
  const { tag: Tag, featured, ...rest } = props as Props & DefaultProps;
  return <Tag {...rest} />;
};

GalleryItem.defaultProps = {
  tag: 'li',
} as DefaultProps;

GalleryItem.displayName = 'PortfolioGallery.Item';

export default styled(GalleryItem)`
  padding: ${pxToRem(GALLERY.itemPadding)};
  ${(props) => {
    return props.featured ? `
      @media(min-width: ${pxToRem(GALLERY.fullSize)}) {
        grid-column: span 2;
        grid-row: span 2;
      }
    ` : '';
  }}
`;
