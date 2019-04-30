import * as React from 'react';
import styled from 'styled-components';
import * as tinyColor from 'tinycolor2';
import PortfolioItemSVG from './PortfolioItemSVG';
import { pxToRem } from '../../styles/utils';
import { COLORS } from '../../styles/vars';

interface Props extends React.HTMLProps<HTMLElement> {
  className?: string;
  svgSource: string;
  tag?: Tag;
}

const secondaryList = Array.from({ length: 3 }, (v, i) => i);

export const PortfolioDetailSVG: React.SFC<Props> = props => {
  const { tag: Tag, className, svgSource, ...rest } = props;
  return (
    // @ts-ignore
    <Tag className={className} {...rest}>
      <PortfolioItemSVG
        svgSource={svgSource}
        className="portfolio-detail__svg portfolio-detail__svg--primary"
      />
      <div className="portfolio-detail__secondary">
        {secondaryList.map(item => (
          <PortfolioItemSVG
            key={item}
            svgSource={svgSource}
            className="portfolio-detail__svg portfolio-detail__svg--secondary"
          />
        ))}
      </div>
    </Tag>
  );
};

PortfolioDetailSVG.defaultProps = {
  tag: 'article',
};

PortfolioDetailSVG.displayName = 'Portfolio.DetailSVG';

const StyledPortfolioDetailSVG = styled(PortfolioDetailSVG)`
  text-align: center;
  margin-top: ${pxToRem(50)};

  .portfolio-detail__secondary {
    max-width: ${pxToRem(960)};
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${pxToRem(320)}, 1fr));
  }

  .portfolio-detail__svg {
    fill: ${COLORS.base};
    width: 100%;
    max-width: ${pxToRem(960)};
    margin: auto;
    padding: 1vw;

    svg {
      max-height: 80vh;
    }
  }

  ${secondaryList.map(
    i =>
      `
      .portfolio-detail__svg--secondary:nth-child(${i + 1}) {
        fill: ${tinyColor(COLORS.highlight)
          .spin(90 * i)
          .toString()};
      }
    `,
  )};
`;

export default StyledPortfolioDetailSVG;
