import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../styles/utils';
import { COLORS } from '../../styles/vars';

interface Props {
  className?: string;
  svgSource: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

export const PortfolioDetailSVG: React.SFC<Props> = props => {
  const { tag: Tag, className, svgSource, ...rest } = props as Props &
    DefaultProps;
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: svgSource }}
      {...rest}
    />
  );
};

PortfolioDetailSVG.defaultProps = {
  tag: 'article',
} as DefaultProps;

PortfolioDetailSVG.displayName = 'Portfolio.DetailSVG';

const StyledPortfolioDetailSVG = styled(PortfolioDetailSVG)`
  text-align: center;
  margin-top: ${pxToRem(50)};

  svg {
    fill: ${COLORS.base};
    width: 100%;
    max-width: ${pxToRem(960)};
    max-height: 80vh;
  }
`;

export default StyledPortfolioDetailSVG;
