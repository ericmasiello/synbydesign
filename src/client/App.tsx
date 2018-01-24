import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import styled, { injectGlobal } from 'styled-components';
import * as tinyColor from 'tinycolor2';
import base from './styles/base';
import { COLORS } from './styles/vars';
import { pxToRem } from './styles/utils';

injectGlobal`
  ${base}
`;

interface Props {
  route: {
    routes: RouteConfig[];
  };
  className?: string;
}

const App: React.SFC<Props> = ({ route, className  }) => {
  return (
    <div className={className}>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: styled(App)`
    border: 1.8vmin solid ${tinyColor(COLORS.highlight).setAlpha(0.8).toRgbString()};
    padding-top: ${pxToRem(30)};
    padding-bottom: ${pxToRem(30)};
    min-height: 100vh;
  `,
};
