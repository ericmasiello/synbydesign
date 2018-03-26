import * as React from 'react';
import styled from 'styled-components';
import PortfolioDetailBackground from './PortfolioDetailBackground';
import { pxToRem } from '../../styles/utils';
import { pageContainer, visuallyHidden, type } from '../../styles/mixins';
import { TYPE_SIZE, HEADER_WEIGHTS } from '../../styles/vars';

const minHeight = 600;

interface TitleProps {
  className?: string;
  hide?: boolean;
}

// FIXME: should use Type1 here but need to figure out how to pass down hidden attribute
const Title: React.SFC<TitleProps> = ({
  className,
  children,
  hide,
  ...rest
}) => (
  <h1 className={className} hidden={hide} {...rest}>
    {children}
  </h1>
);

const StyledTitle = styled(Title)`
  ${type(TYPE_SIZE.t1)};
  text-transform: uppercase;
  margin: 0;
  ${props => (props.hide ? visuallyHidden : '')};
`;

const Description = styled.div`
  &:first-line {
    ${type(TYPE_SIZE.t4)};
    font-weight: ${HEADER_WEIGHTS.medium};
  }
`;

const Content = styled.div`
  ${pageContainer};
  ${type(TYPE_SIZE.t5)};
  max-width: 65em;
  margin: 0 auto ${pxToRem(50)};
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
  hideTitle?: boolean;
}

export const PortfolioDetailHero: React.SFC<Props> = props => {
  const {
    title,
    className,
    imagePath,
    description = '',
    hideTitle,
    ...rest
  } = props;
  return (
    <div className={className} {...rest}>
      <HeroImageContainer>
        <PortfolioDetailBackground
          imagePath={imagePath}
          styles={{
            filter: 'none',
            applyGradient: false,
            size: '80%',
          }}
        />
      </HeroImageContainer>
      <Content>
        <StyledTitle hide={hideTitle}>{title}</StyledTitle>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Content>
    </div>
  );
};

PortfolioDetailHero.displayName = 'Portfolio.DetailHero';

const StyledPortfolioDetailHero = styled(PortfolioDetailHero)``;

export default StyledPortfolioDetailHero;
