import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  svgSource: string;
}

const PortfolioItemSVG: React.SFC<Props> = (props) => {
  return (
    <div className={props.className}>
      <div
        dangerouslySetInnerHTML={{ __html: props.svgSource }}
      />
    </div>
  );
};

PortfolioItemSVG.displayName = 'PortfolioItemSVG';

export default styled(PortfolioItemSVG)`
`;
