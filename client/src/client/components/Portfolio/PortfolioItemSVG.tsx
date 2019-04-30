import * as React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLProps<HTMLElement> {
  className?: string;
  svgSource: string;
  tag?: Tag;
}

const PortfolioItemSVG: React.SFC<Props> = props => {
  const { tag: Tag, svgSource, className, ...rest } = props;
  return (
    // @ts-ignore
    <Tag
      className={props.className}
      dangerouslySetInnerHTML={{ __html: props.svgSource }}
      {...rest}
    />
  );
};

PortfolioItemSVG.defaultProps = {
  tag: 'div',
};

PortfolioItemSVG.displayName = 'PortfolioItemSVG';

export default styled(PortfolioItemSVG)`
  &,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
