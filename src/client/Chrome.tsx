import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tinyColor from 'tinycolor2';
import base from './styles/base';
import { PAGE, COLORS, pageBorderWidth } from './styles/vars';
import { pxToRem } from './styles/utils';
import * as packageJSON from '../../package.json';

const GlobalStyle = createGlobalStyle`
  ${base}
`;

interface Props
  extends React.HTMLProps<HTMLDivElement>,
    RouteComponentProps<any> {
  portfolio?: Portfolio;
}

const Version = styled.small`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: ${pxToRem(2)} ${pxToRem(4)} 0;
`;

const Chrome: React.SFC<Props> = ({ children, className }) => (
  <React.Fragment>
    <GlobalStyle />
    <div className={className}>
      {children}
      <Version>v{packageJSON.version}</Version>
    </div>
  </React.Fragment>
);

function mapStateToProps(state: AppState, props: Props) {
  const match = /\/portfolio\/(\S+)/g.exec(props.location.pathname);
  if (match) {
    // tslint:disable-next-line no-unused-variable
    const [ignore, id] = match;
    return {
      ...props,
      portfolio: state.portfolioItems.find(item => item.id === id),
    };
  }

  return props;
}

const getThemeColor = (props: { portfolio?: Portfolio }) => {
  if (
    props.portfolio &&
    props.portfolio.meta &&
    props.portfolio.meta.highlightColor
  ) {
    return props.portfolio.meta.highlightColor;
  }
  return tinyColor(COLORS.highlight)
    .setAlpha(0.8)
    .toRgbString();
};

const StyledChrome = styled(Chrome)`
  ${props => `border: ${pageBorderWidth} solid ${getThemeColor(props)};`};
  padding-bottom: ${pxToRem(PAGE.bottomPadding)};
  min-height: 100vh;
  transition: border-color 1s;
  position: relative;

  ${Version} {
    ${props => `background-color: ${getThemeColor(props)};`};
    color: ${COLORS.bg};
  }
`;

export default connect(mapStateToProps)(StyledChrome);
