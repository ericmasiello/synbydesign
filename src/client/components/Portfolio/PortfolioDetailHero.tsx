import * as React from 'react';
import styled from 'styled-components';
import PortfolioDetaiBackground from './PortfolioDetaiBackground';
import { pxToRem } from '../../styles/utils';
import { PageContainer } from '../../styles/extensions';

const minHeight = 600;

const Title = styled.h1`
  text-transform: uppercase;
`;
const Description = styled.div``;

const Content = PageContainer.extend`
  text-align: center;
  margin-bottom: ${pxToRem(50)};
`;

const HeroImageContainer = styled.div`
  min-height: ${pxToRem(minHeight)};
  position: relative;
`;

interface Props {
  className?: string;
  imagePath: string;
  title: string;
  description?: string;
}

export const PortfolioDetailHero: React.SFC<Props> = (props) => {
  const { title, className, imagePath, description = '' } = props;
  return (
    <div className={className}>
      <HeroImageContainer>
        <PortfolioDetaiBackground
          imagePath={imagePath}
          styles={{
            filter: 'none',
            applyGradient: false,
          }}
        />
      </HeroImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Content>
    </div>
  );
};

PortfolioDetailHero.displayName = 'Portfolio.DetailHero';

const StyledPortfolioDetailHero = styled(PortfolioDetailHero)`
`;

export default StyledPortfolioDetailHero;
