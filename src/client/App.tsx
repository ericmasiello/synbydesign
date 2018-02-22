import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import styled, { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import * as tinyColor from 'tinycolor2';
import base from './styles/base';
import { COLORS, pageBorderWidth } from './styles/vars';
import { pxToRem } from './styles/utils';

injectGlobal`
  ${base}
`;

interface Props {
  route: {
    routes: RouteConfig[];
  };
  className?: string;
  portfolio?: Portfolio;
  location: {
    pathname: string;
  };
}

const App: React.SFC<Props> = ({ route, className  }) => (
  <div className={className}>
    {renderRoutes(route.routes)}
  </div>
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

export default {
  component: connect(mapStateToProps)(styled(App)`
    ${({ portfolio }) => {
      let color = tinyColor(COLORS.highlight).setAlpha(0.8).toRgbString();
      if (portfolio && portfolio.meta && portfolio.meta.highlightColor) {
        color = portfolio.meta.highlightColor;
      }
      return `border: ${pageBorderWidth} solid ${color};`;
    }}
    padding-bottom: ${pxToRem(30)};
    min-height: 100vh;
    transition: border-color 1s;
  `),
};
