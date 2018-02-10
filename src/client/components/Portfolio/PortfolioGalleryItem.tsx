import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { GALLERY } from '../../styles/vars';

interface Props extends React.HTMLProps<HTMLLIElement> {
  className?: string;
  featured?: boolean;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

type PropsWithDefaults = Props & DefaultProps;

export const GalleryItem: React.SFC<Props> = (props) => {
  const { tag: Tag, featured, ...rest } = props as Props & DefaultProps;
  return <Tag {...rest} />;
};

GalleryItem.defaultProps = {
  tag: 'li',
} as DefaultProps;

GalleryItem.displayName = 'PortfolioGallery.Item';

export default styled(GalleryItem)`
  display: flex;
  padding: ${pxToRem(GALLERY.itemPadding)};
  ${(props) => {
    return props.featured ? `
      @media(min-width: ${pxToRem(GALLERY.fullSize)}) {
        grid-column: auto / span 2;
        grid-row: auto / span 2;
      }
    ` : '';
  }}
`;
