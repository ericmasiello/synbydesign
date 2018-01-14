import * as React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { injectGlobal } from 'styled-components';
import base from './styles/base';

injectGlobal`
  ${base}
`;

interface Props {
  route: {
    routes: RouteConfig[];
  };
}

const App: React.SFC<Props> = ({ route }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
};
