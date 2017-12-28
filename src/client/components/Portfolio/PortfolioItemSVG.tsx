import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  svgSource: string;
}

const PortfolioItemSVG: React.SFC<Props> = (props) => {
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: props.svgSource }}
    />
  );
};

PortfolioItemSVG.displayName = 'PortfolioItemSVG';

export default styled(PortfolioItemSVG)`
  &, svg {
    width: 100%;
    height: 100%;
  }
`;
