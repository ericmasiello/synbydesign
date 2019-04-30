import * as React from 'react';
import styled from 'styled-components';
import PortfolioDetailBackground from './PortfolioDetailBackground';
import { pxToRem } from '../../styles/utils';
import { pageContainer, visuallyHidden, type } from '../../styles/mixins';
import { TYPE_SIZE, HEADER_WEIGHTS, COLORS } from '../../styles/vars';
import Type1 from '../Type1';

interface TitleProps {
  className?: string;
  hide?: boolean;
}

const Title: React.SFC<TitleProps> = ({
  className,
  children,
  hide,
  ...rest
}) => (
  <Type1 tag="h1" className={className} hidden={hide} {...rest}>
    {children}
  </Type1>
);

const StyledTitle = styled(Title)`
  ${type(TYPE_SIZE.t1)};
  text-transform: uppercase;
  margin: 0;
  ${props => (props.hide ? visuallyHidden : '')};
`;

const Description = styled.div`
  margin-top: 2rem;

  &:first-line {
    ${type(TYPE_SIZE.t4)};
    font-weight: ${HEADER_WEIGHTS.medium};
  }

  blockquote {
    border-left: 1px solid ${COLORS.base};
    padding-left: 1rem;
  }
`;

const Content = styled.div`
  ${pageContainer};
  ${type(TYPE_SIZE.t5)};
  max-width: 65em;
  margin: 0 auto ${pxToRem(50)};
`;

const HeroImageContainer = styled.div`
  position: relative;
  min-height: 0;
  height: 80vw;
  max-height: 80vh;
`;

interface Props {
  className?: string;
  imagePath: string;
  title: string;
  description?: string;
  hideTitle?: boolean;
  styles?: BackgroundStyles;
}

export const PortfolioDetailHero: React.SFC<Props> = props => {
  const {
    title,
    className,
    imagePath,
    description = '',
    hideTitle,
    styles,
    ...rest
  } = props;
  return (
    <div className={className} {...rest}>
      <HeroImageContainer>
        <PortfolioDetailBackground imagePath={imagePath} styles={styles} />
      </HeroImageContainer>
      <Content>
        <StyledTitle hide={hideTitle}>{title}</StyledTitle>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Content>
    </div>
  );
};

PortfolioDetailHero.defaultProps = {
  styles: {
    filter: 'none',
    applyGradient: false,
    size: '80%',
  },
};

PortfolioDetailHero.displayName = 'Portfolio.DetailHero';

const StyledPortfolioDetailHero = styled(PortfolioDetailHero)``;

export default StyledPortfolioDetailHero;
