import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { GALLERY } from '../../styles/vars';

interface Props {
  className?: string;
  row?: string;
  column?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

export const GalleryItem: React.SFC<Props> = (props) => {
  const { tag: Tag, row, column, ...rest } = props as Props & DefaultProps;
  return <Tag {...rest} />;
};

GalleryItem.defaultProps = {
  tag: 'li',
} as DefaultProps;

GalleryItem.displayName = 'PortfolioGallery.Item';

export default styled(GalleryItem)`
  ${(props) => {
    let styles = props.column ? `
      @media(min-width: ${pxToRem(GALLERY.fullSize)}) {
        grid-column: ${props.column};
      }
    ` : '';
    styles = `${styles}${props.row ? `
      grid-row: ${props.row};
    ` : ''}`;
    return styles;
  }}
`;
